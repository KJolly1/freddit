import React, { useState } from "react";
import "./Login.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import firebase from "firebase";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import googleImg from "../../googleLogo.jpg";

function LoginModal(props) {
  const { gmail, openD, loginClose } = props;
  return (
    <Modal
      className="login-modal"
      open={openD}
      aria-labelledby="login-modal"
      closeAfterTransition
      BackdropComponent={Backdrop}
      onClose={loginClose}
    >
      <Fade in={openD}>
        <div className="modal">
          <div className="contentM">
          <h2 id="login-modal">Login</h2>
            {/* <form className="login-form">
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                name="email"
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                name="password"
              />
              <Button type="sumbit" variant="contained" color="primary">
                Login
              </Button>
            </form> */}
            <div className="other-sign-in">
            {/* <Button style={{color:"white", background:"#3267d6" }}   color="primary" onClick={gmail} startIcon={<img src={googleImg} className="googleIcon" alt="google icon" />} >Sign in with google </Button> */}
              <Button onClick={gmail} variant="outlined" color="primary" style={{padding:"0%"}}>
                <img src={googleImg} alt="G" className="googleIcon" />
                <Button style={{color:"white", background:"#3267d6" }}>Sign in with Gmail</Button>
              </Button>
              {/* <Button variant="outlined">Github</Button> */}
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default function Login() {
  const [loginModal, setLoginModal] = useState(false);

  const gmail = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {});
  };

  const loginClick = () => {
    setLoginModal(true);
  };
  const loginClose = () => {
    setLoginModal(false);
  };

  return (
    <>
      <IconButton onClick={loginClick}>
        <Badge color="primary" max={99}>
          <AccountCircleIcon fontSize="large" />
        </Badge>
      </IconButton>
      <br />
      <LoginModal gmail={gmail} openD={loginModal} loginClose={loginClose} />

      {/* <button className="login_button">Log<span className="in_login">out</span></button></> */}
    </>
  );
}
