import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ProfileTextField from "../../components/ProfileTextField";
import LinkButton from "../../components/Buttons/LinkButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import styles from "./profileTextFieldStyles";
import logo from "../../assets/logo.png";
import { COLORS } from "../../constants/Colors";

export const ProfileScreen = (): JSX.Element => {
  const [capsLocked, setCapsLocked] = useState(false);
  const [message, setMessage] = useState({
    show: false,
    text: null,
  });
  const handleChange = (e: any) => {
    setMessage({
      show: false,
      text: null,
      // severity: undefined,
    });
  };
  const current = new Date();
  const date = `${current.getFullYear()}-0${
    current.getMonth() + 1
  }-0${current.getDate()}`;
  const dogName = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const firstName = localStorage.getItem("userFirstName");
  const lastName = localStorage.getItem("userLastName");
  const breed = localStorage.getItem("userBreed");
  const gender = localStorage.getItem("userGender");
  const dateOfBirth = localStorage.getItem("userDateOfBirth");
  const phoneNumber = localStorage.getItem("userMobilePhone");
  const description = localStorage.getItem("userDescription");

  return (
    <Box sx={styles.rightSideContainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "yelow",
          }}
        >
          <Box
            component="img"
            src={logo}
            height="464px"
            width="537px"
            alt="logo"
            sx={styles.image}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "yelow",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "yelow",
              ml: "90px",
              mr: "100px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: "10px" }}>
              User informations
            </Typography>
            <Typography>Email: {email}</Typography>
            <Typography>First name: {firstName}</Typography>
            <Typography>Last name: {lastName}</Typography>
            <Typography>Mobile phone: {phoneNumber}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "yelow",
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: "10px" }}>
              Pet informations
            </Typography>
            <Typography>Name: {dogName}</Typography>
            <Typography>Date of birth: {dateOfBirth}</Typography>
            <Typography>Breed: {breed}</Typography>
            <Typography>Gender: {gender}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "yelow",
            mt: "20px",
          }}
        ></Box>
        <Typography sx={{ fontWeight: "bold", mb: "10px", fontSize: 24 }}>
          Complete your profile
        </Typography>
        <Typography>Description:</Typography>
        <Box
          sx={{
            backgroundColor: "white",
            border: "2px solid #ffffff",
            borderColor: "black",
            height: "100px",
            p: 1,
            mt: "10px",
          }}
        >
          <Typography></Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "yelow",
            mt: "20px",
            justifyContent: "center",
          }}
        >
          <FormControl
            sx={{
              mt: "16px",
              mb: "8px",
              mr: "50px",
              "& label.Mui-focused": {
                color: COLORS.PURPLE,
                borderRadius: "2px",
              },
            }}
          >
            <InputLabel>Vactionation</InputLabel>
            <Select
              fullWidth
              id="gender"
              label="Gender"
              name="gender"
              aria-labelledby="gender"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              sx={{ height: "50px", width: "200px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Yes</MenuItem>
              <MenuItem value={20}>No</MenuItem>
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
            <InputLabel>Rabies</InputLabel>
            <Select
              fullWidth
              id="gender"
              label="Gender"
              name="gender"
              aria-labelledby="gender"
              color="secondary"
              onChange={handleChange}
              onKeyUp={(event) => {
                setCapsLocked(event.getModifierState("CapsLock"));
              }}
              sx={{ height: "50px", width: "200px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Yes</MenuItem>
              <MenuItem value={20}>No</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <PrimaryButton
          title={"Save"}
          sx={{ width: "10%", alignSelf: "center", mt: "30px" }}
        ></PrimaryButton>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src={logo}
            height="464px"
            width="537px"
            alt="logo"
            sx={styles.image}
          ></Box>
          <Typography sx={styles.primaryText}>
            Hello {firstNameValue}!
          </Typography>
          <Typography sx={styles.primaryText}>
            {firstNameValue} Profile
          </Typography>
          <Box sx={styles.addCoApplicationContainer}>
            <LinkButton
              title={"+ add co-applicant"}
              sx={{ marginRight: "20px", width: "12%" }}
            />
            {isChange ? (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <PrimaryButton
                  title={"Cancel"}
                  sx={{ width: "5%", mr: "16px" }}
                  handleButtonClick={onClickCancel}
                />
                <PrimaryButton
                  title={"Save"}
                  sx={{ width: "5%" }}
                  handleButtonClick={onClickSave}
                />
              </Box>
            ) : (
              <DisabledButton
                title={"Save"}
                sx={{ width: "5%" }}
                disabled={true}
              />
            )}
          </Box>
        </Box>
        <Box sx={styles.formContainer}>
          <ProfileTextField
            type={"First Name"}
            value={firstNameValue}
            onChange={onChangeFirstName}
          />
          <ProfileTextField
            type={"Last Name"}
            value={lastNameValue}
            onChange={onChangeLastName}
          />
          <ProfileTextField
            type={"date"}
            value={birthDateValue}
            onChange={onChangeDateOfBirth}
          />
        </Box>
        <Box sx={styles.formContainer}>
          <ProfileTextField
            text={"Street address"}
            value={addressValue}
            onChange={onChangeAddress}
          />
          <ProfileTextField
            text={"City"}
            value={cityValue}
            onChange={onChangeCity}
          />
          <ProfileTextField
            text={"State"}
            value={stateValue}
            onChange={onChangeState}
          />
          <ProfileTextField
            text={"Zip code"}
            value={zipCodeValue}
            maxLength={5}
            onChange={onChangeZipCode}
          />
        </Box>
        <Box sx={styles.formContainer}>
          <ProfileTextField
            text={"Drivers License #"}
            value={driverLicenseValue}
            onChange={onChangeDriverLicense}
          />
          <ProfileTextField
            text={"Driver License State"}
            value={driverLicenseStateValue}
            select={true}
            onChange={onChangeDriverLicenseState}
          />
        </Box>
        <Box sx={styles.formContainer}>
          <ProfileTextField
            text={"Phone"}
            value={phoneValue}
            maxLength={11}
            onChange={onChangePhone}
          />
          <ProfileTextField type={"email"} value={emailValue} disabled={true} />
          <ProfileTextField
            text={"Occupation"}
            value={occupationValue}
            onChange={onChangeOccupation}
          />
        </Box>
      </Box>
      <Box sx={styles.policiesContainer}>
        <Typography sx={styles.primaryText}>Your Policies</Typography>
        <Typography sx={styles.secondaryText}>
          You have no policies available to display.
        </Typography>
        <PrimaryButton title={"Shop for coverage"} sx={{ width: "12%" }} />
      </Box>
      <Box sx={styles.policiesContainer}>
        <Typography sx={styles.primaryText}>Non - Embroker Policies</Typography>
        <Typography sx={styles.secondaryText}>
          <strong>Have a non-Embroker policy?</strong> Upload it here to manage
          all your policies in one place or transfer it to Embroker.
        </Typography>
        <Box sx={styles.uploadFileBox}>
          <input type={"file"} multiple onChange={handleFileChange} />
        </Box>
        {!isUploadFile ? (
          <PrimaryButton
            title={"Upload"}
            sx={{ width: "12%" }}
            // handleButtonClick={handleUploadFiles}
          />
        ) : (
          <Typography sx={styles.successUploadText}>
            Successfully uploaded {files.length} file!
          </Typography>
        )} */}
      </Box>
    </Box>
  );
};
