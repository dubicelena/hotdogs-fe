import {
  Box,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./style/modal";
import { TEXT } from "../constants/Text";
import PrimaryButton from "./Buttons/PrimaryButton";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  isLogin?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ open, onClose, isLogin = true }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [capsLocked, setCapsLocked] = useState(false);
  const [validated, setValidated] = useState({
    email: false,
    password: false,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const login = async () => {
    await axios({
      method: "post",
      url: "http://192.168.17.45:9099/login",
      data: user,
    })
      .then((response) => {
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        localStorage.setItem("userName", JSON.stringify(response.data.dogName));
        localStorage.setItem("userEmail", JSON.stringify(response.data.email));
        if (response.status === 200) navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });

    setTouched({
      ...touched,
      [e.target.id]: true,
    });

    switch (e.target.id) {
      case "email":
        return setValidated({
          ...validated,
          [e.target.id]: emailRegex.test(e.target.value),
        });
      case "password":
        return setValidated({
          ...validated,
          [e.target.id]: passwordRegex.test(e.target.value),
        });
      case "firstName":
        return setValidated({ ...validated, [e.target.id]: true });
      case "lastName":
        return setValidated({ ...validated, [e.target.id]: true });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.containerLogin}>
        <Typography sx={{ fontStyle: TEXT.headerOne }}>
          Login account
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            value={user.email}
            fullWidth
            margin="normal"
            id="email"
            aria-labelledby="Email"
            label="Email"
            name="email"
            autoComplete="email"
            color="secondary"
            onChange={handleChange}
            onKeyUp={(event) => {
              setCapsLocked(event.getModifierState("CapsLock"));
            }}
            InputProps={{
              sx: styles.textFieldInputLogin,
            }}
          />
          <TextField
            value={user.password}
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            aria-labelledby="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            color="secondary"
            onChange={handleChange}
            onKeyUp={(event) => {
              setCapsLocked(event.getModifierState("CapsLock"));
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon color="inherit" />
                    ) : (
                      <VisibilityIcon color="inherit" />
                    )}
                  </IconButton>
                  {capsLocked ? (
                    <KeyboardCapslockIcon
                      color="secondary"
                      sx={{ ml: "10px" }}
                    />
                  ) : (
                    <></>
                  )}
                </InputAdornment>
              ),

              sx: styles.textFieldInputLogin,
            }}
          />
          <PrimaryButton
            title="Login"
            handleButtonClick={() => login()}
            sx={{
              width: "100%",
              mt: "20px",
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};
