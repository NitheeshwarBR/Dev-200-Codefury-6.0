import * as React from "react";
import { Avatar, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";

const Stylemodal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: 10,
  marginBottom: "20px",
});

export default function FloatingActionButtons() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 35,
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
          sx={{
            marginLeft: 2,
          }}
        >
          <EditIcon />
        </Fab>
      </Box>
      <Stylemodal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={800} height={350} bgcolor="white" p={3} borderRadius={4}>
          <Typography
            id="modal-modal-title"
            variant="h4"ṭ
            color="gray"
            textAlign={"left"}
          >
            <i>
              <b>What's on your mind today ?</b>
            </i>
          </Typography>
          <UserBox>
            <Avatar></Avatar>
          </UserBox>
        </Box>
      </Stylemodal>
    </>
  );
}
