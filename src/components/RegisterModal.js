import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAxios from "../hooks/useAxios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RegisterModal() {
  const [open, setOpen] = useState(true);
  const [nick, setNick] = useState("");
  const privateAxios = useAxios();
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setNick(e.target.value);
  };
  const onClick = () => {
    privateAxios
      .post("api/auth/register", { username: nick })
      .then((res) => {
        console.log(res);
        setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <form onSubmit={onSubmit}>
              <label htmlFor="nickname">닉네임</label>
              <input type="text" id="nickname" onChange={onChange} value={nick} />
              <Button onClick={onClick}>등록</Button>
            </form>
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
