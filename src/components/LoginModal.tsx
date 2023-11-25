import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./style/modal";
import { TEXT } from "../constants/Text";
import PrimaryButton from "./Buttons/PrimaryButton";
import { COLORS } from "../constants/Colors";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// import CloseIcon from "@mui/icons-material/Close";

interface Message {
  show: boolean;
  text: string | null;
}

interface Props {
  open: boolean;
  isLogin?: boolean;
  // sx?: SxProps<Theme>;
  onClose?: () => void;
}

export const LoginModal = ({ open, onClose, isLogin = true }: Props) => {
  const [showLogin, setShowLogin] = useState(isLogin);
  const [showPassword, setShowPassword] = useState(false);
  const [capsLocked, setCapsLocked] = useState(false);
  const [validated, setValidated] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [message, setMessage] = useState({
    show: false,
    text: null,
  });

  const [providerValidated, setProviderValidated] = useState({
    firstName: false,
    lastName: false,
    companyName: true,
    contactName: true,
    phone: true,
    email: false,
    password: false,
  });

  const [registrationPasswordError, setRegistrationPasswordError] =
    useState(false);

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e: any) => {
    setMessage({
      show: false,
      text: null,
      // severity: undefined,
    });
    setRegistrationPasswordError(!passwordRegex.test(e.target.value));

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
      case "companyName":
        return setValidated({ ...providerValidated, [e.target.id]: true });
      case "contactName":
        return setValidated({ ...providerValidated, [e.target.id]: true });
      case "phone":
        return setValidated({ ...providerValidated, [e.target.id]: true });
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
            autoFocus={showLogin}
            color="secondary"
            onChange={handleChange}
            onKeyUp={(event) => {
              setCapsLocked(event.getModifierState("CapsLock"));
            }}
            error={!validated.email && touched.email ? true : false}
            helperText={
              !validated.email && touched.email
                ? "Please enter a valid email adress"
                : ""
            }
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
            error={!validated.password && touched.password ? true : false}
            helperText={
              !validated.password && touched.password ? "Invalid password" : ""
            }
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
            // handleButtonClick={() => setIsOpenregistratinModal(true)}
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
