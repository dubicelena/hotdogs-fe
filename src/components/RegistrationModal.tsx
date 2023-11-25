import {
  Box,
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
import { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  isLogin?: boolean;
  onClose?: () => void;
  setOpen: (value: boolean) => void;
  setOpenLogin: (value: boolean) => void;
}

export const RegistrationModal = ({
  open,
  onClose,
  isLogin = true,
  setOpen,
  setOpenLogin,
}: Props) => {
  const [breed, setBreed] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [capsLocked, setCapsLocked] = useState(false);
  const [validated, setValidated] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    phoneNumber: false,
    dogName: false,
    dateOfBirth: false,
    gender: false,
    breedId: false,
    address: false,
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dogName: "",
    dateOfBirth: "",
    gender: "",
    breedId: 0,
    address: "",
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

  const register = async () => {
    await axios({
      method: "post",
      url: "http://192.168.17.45:9099/register",
      data: user,
    })
      .then((response) => {
        console.log(user);
        if (response.status === 200) {
          navigate("/");
          setOpen(false);
          setOpenLogin(true);
        }
      })
      .catch((e) => {
        console.log(user);
        console.log(e);
      });
  };

  const getBreed = async () => {
    await axios({
      method: "get",
      url: "http://192.168.17.45:9099/api/v0/breeds",
    })
      .then((response) => {
        setBreed(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBreed();
  }, []);

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
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
      <Box sx={styles.containerRegistratin}>
        <Typography sx={{ fontStyle: TEXT.headerOne }}>
          Register your Hot Dogs account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                sx: styles.textFieldInputRegistration,
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

                sx: styles.textFieldInputRegistration,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              id="firstName"
              label="First name"
              name="firstName"
              aria-labelledby="firstName"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              InputProps={{
                sx: styles.textFieldInputRegistration,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              id="lastName"
              label="Last name"
              name="lastName"
              aria-labelledby="lastName"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              InputProps={{
                sx: styles.textFieldInputRegistration,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              id="phoneNumber"
              label="Mobile phone"
              name="phoneNumber"
              aria-labelledby="mobilePhone"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              InputProps={{
                sx: styles.textFieldInputRegistration,
              }}
            />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mt: "16px", mb: "8px", ml: "20px", mr: "20px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              fullWidth
              margin="normal"
              id="dogName"
              label="Dog name"
              name="dogName"
              aria-labelledby="dogName"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              InputProps={{
                sx: styles.textFieldInputRegistration,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              aria-labelledby="dateOfBirth"
              color="secondary"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
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

                sx: styles.textFieldInputRegistration,
              }}
            />
            <FormControl
              sx={{
                mt: "16px",
                mb: "8px",
                "& label.Mui-focused": {
                  color: COLORS.PURPLE,
                  borderRadius: "2px",
                },
              }}
            >
              <InputLabel>Gender</InputLabel>
              <Select
                fullWidth
                id="gender"
                value={user.gender}
                label="Gender"
                name="gender"
                aria-labelledby="gender"
                color="secondary"
                onChange={handleChange}
                onKeyUp={(event) => {
                  setCapsLocked(event.getModifierState("CapsLock"));
                }}
                sx={{ height: "50px" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                mt: "16px",
                mb: "8px",
                "& label.Mui-focused": {
                  color: COLORS.PURPLE,
                  borderRadius: "2px",
                },
              }}
            >
              <InputLabel>Breed</InputLabel>
              <Select
                fullWidth
                id="breedId"
                value={user.breedId}
                label="Breed"
                name="breedId"
                aria-labelledby="breedId"
                color="secondary"
                onChange={handleChange}
                onKeyUp={(event) => {
                  setCapsLocked(event.getModifierState("CapsLock"));
                }}
                sx={{ height: "50px" }}
              >
                {breed.map((item: any) => (
                  <MenuItem id="breedId" key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              margin="normal"
              id="address"
              label="Location"
              name="address"
              aria-labelledby="location"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              InputProps={{
                sx: styles.textFieldInputRegistration,
              }}
            />
          </Box>
        </Box>
        <PrimaryButton
          title="Registration Now"
          handleButtonClick={() => {
            register();
          }}
          sx={{
            width: "100%",
            mt: "20px",
          }}
        />
      </Box>
    </Modal>
  );
};
