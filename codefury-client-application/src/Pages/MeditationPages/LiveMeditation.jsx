import { useEffect, useState } from "react";
import "./LiveMeditation.css"
import { io } from 'socket.io-client';
import { Peer } from "peerjs";
import { useRef } from "react";
import { Button, LinearProgress } from '@mui/material';
function LiveMeditation() {
    const [sid, setSid] = useState(null)
    const [pid, setPid] = useState(null)
    const [activeMeditations, setActiveMeditations] = useState(null)
    const [peerConnection, setPeerConnection] = useState(null)
    const [socketConnection, setSocketConnection] = useState(null)
    const [isConnected, setIsConnected] = useState(null)
    const videoStream = useRef()

    useEffect(() => {
        const socket = io("http://localhost:3030");
        setSocketConnection(socket)

        socket.on("id", (id) => setSid(id))
        socket.on("error", (err) => alert(err))
        socket.on("actives", (userList) => {
            console.log(userList)
            setActiveMeditations(userList)
        })

        const peer = new Peer(undefined, {
            host: "localhost",
            port: "3030",
            path: "/peerjs",
        });
        // const peer = new Peer(undefined, {
        //     host: "hiccup.adaptable.app",
        //     port: "",
        //     path: "/peerjs",
        //   });

        setPeerConnection(peer)
        peer.on("open", (id) => {
            setPid(id)
        });
        peer.on("error", (err) => {
            // alert("peer connection error");
            console.log(err);
        });

        peer.on("call", (call) => {
            alert("got call")
            console.log("receiving");

            console.log("videostream", videoStream.current)
            call.answer(videoStream.current);

            let conn = false;
            var video = document.createElement("video");
            call.on("stream", (remoteStream) => {
                if (!conn) {
                    conn = true;
                    addVideoToGrid(remoteStream, video);
                    console.log("remoteStream=", remoteStream);
                }

            });
            call.on("close", () => {
                console.log("call ended");
                video.remove();
            });
        });
    }, [])


    function addVideoToGrid(stream, video) {
        const grid = document.getElementById("videoGrid");
        grid.appendChild(video);
        video.srcObject = stream;

        video.addEventListener("loadedmetadata", () => {
            video.play();
        });
    }

    function hostEvent() {
        const organizer = document.getElementById("organizer").value,
            purpose = document.getElementById("purpose").value
        const data = {
            peerId: pid,
            organizer,
            purpose,
        }
        socketConnection.emit("join", data)


        const constraints = {
            video: true,
            audio: true,
        };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                videoStream.current = stream;
                var video = document.createElement("video");
                video.muted = true;
                addVideoToGrid(stream, video);
                video.className = "self"
            })
            .catch((err) => {
                console.log("error occured during accessing local camera", err);
            });

    }
    async function connectToEvent(pid) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        var video1 = document.createElement("video");
        video1.className = "self"
        addVideoToGrid(stream, video1);
        // const call = peerConnection.call(pid,new MediaStream(), {
        //     constraints: {
        //       offerToReceiveAudio: true,
        //       offerToReceiveVideo: true,
        //     }
        //   });
        const call = peerConnection.call(pid, stream);
        console.log("call", call)
        var video = document.createElement("video");
        var conn = false;
        call.on("stream", (remoteStream) => {
            if (!conn) {
                conn = true;
                addVideoToGrid(remoteStream, video);
                console.log("remoteStream=", remoteStream);
            }
        });
        call.on("close", () => {
            console.log("call ended");
            video.remove();
        });
    }
    return (
        <div >
            <h1>Live Meditation Room</h1>
            <div className="input-values-div">
                <input className="input-text" type="text" placeholder="Event Organizer Name" id="organizer" />
                &nbsp;&nbsp;
                <input className="input-text" type="text" placeholder="Purpose of the Event" id="purpose" />
            </div>  
            <div className="button-div">
                <Button variant="contained" id="hostbtn" onClick={hostEvent}>
                    Host Live Meditation
                </Button>
            </div>

            {/* <h2>SocketId : {sid}</h2>
            <h2>PeerId : {pid}</h2> */}

            <div className="actives">
                {
                    activeMeditations &&
                    activeMeditations.map(room => {
                        if (room.peerId != pid) {
                            return <div className="roomItem">
                                <div>{room.organizer}</div>
                                <div>{room.purpose}</div>
                                <div>{room.peerId}</div>
                                <button onClick={() => connectToEvent(room.peerId)}>connect</button>
                            </div>
                        }
                    })
                }
            </div>
            <div className="video-class">
            <div id="videoGrid"></div>
            </div>
        </div>
    )
}

export default LiveMeditation
