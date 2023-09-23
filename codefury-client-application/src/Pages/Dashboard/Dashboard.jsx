import { useEffect, useState } from "react"
import "./Dashboard.css"
import axios_client from "../../APIs/AxiosClient"
function Dashboard() {
  const [complaits,setComplaits]=useState([])
  async function getComplaints() {
    try {
      const { data } = await axios_client.get("/harassments")
      console.log(data)
      setComplaits(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getComplaints();
  }, [])
  return (
    <div className="dashboard">
      <table className="dashboard-table" border="2">
        <tr>
          <th>UserId</th>
          <th>Domain</th>
          <th>Description</th>
          <th>Status</th>
          <th>phone</th>
          <th>profileLink</th>
          <th>Image Proof</th>
          <th>Resolve</th>
        </tr>

        {
          
          complaits.map(item => {
            return (
              <tr>
                <td>{item.victimId}</td>
                <td>{item.domain}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.phone}</td>
                <td>{item.profileLink}</td>
                <td>
                  {
                    item.screenshots.map(pic=>{
                      return <div><a href={pic} target="_blank">Image</a></div>
                    })
                  }
                </td>
                <td><button className="resolve-btn">Resolve</button></td>
              </tr>
            );
          })
        }

      </table>
    </div>
  )
}

export default Dashboard
