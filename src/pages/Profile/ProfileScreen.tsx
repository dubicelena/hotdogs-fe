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

  const [isChange, setIsChange] = useState(false);
  const [idValue, setIdValue] = useState<any>("");
  const [emailValue, setEmailValue] = useState<any>("");
  const [firstNameValue, setFirstNameValue] = useState<any>("");
  const [lastNameValue, setLastNameValue] = useState<any>("");
  const [birthDateValue, setBirthDateValue] = useState<any>(date);
  const [addressValue, setAddressValue] = useState<any>("");
  const [cityValue, setCityValue] = useState<any>("");
  const [stateValue, setStateValue] = useState<any>("");
  const [zipCodeValue, setZipCodeValue] = useState<any>("");
  const [driverLicenseValue, setDriverLicenseValue] = useState<any>("");
  const [driverLicenseStateValue, setDriverLicenseStateValue] =
    useState<any>("");
  const [phoneValue, setPhoneValue] = useState<any>("");
  const [occupationValue, setOccupationValue] = useState<any>("");

  const onChangeFirstName = (e: any) => {
    console.log(e.target);
    setFirstNameValue(e.target.value);
    setIsChange(true);
  };

  const onChangeLastName = (e: any) => {
    console.log(e.target);
    setLastNameValue(e.target.value);
    setIsChange(true);
  };

  const onChangeDateOfBirth = (e: any) => {
    setBirthDateValue(e.target.value);
    setIsChange(true);
  };

  const onChangeAddress = (e: any) => {
    setAddressValue(e.target.value);
    setIsChange(true);
  };
  const onChangeCity = (e: any) => {
    setCityValue(e.target.value);
    setIsChange(true);
  };

  const onChangeState = (e: any) => {
    setStateValue(e.target.value);
    setIsChange(true);
  };

  const onChangeZipCode = (e: any) => {
    setZipCodeValue(e.target.value);
    setIsChange(true);
  };

  const onChangeDriverLicense = (e: any) => {
    setDriverLicenseValue(e.target.value);
    setIsChange(true);
  };

  const onChangeDriverLicenseState = (e: any) => {
    setDriverLicenseStateValue(e.target.value);
    setIsChange(true);
  };

  const onChangePhone = (e: any) => {
    setPhoneValue(e.target.value);
    setIsChange(true);
  };

  const onChangeOccupation = (e: any) => {
    setOccupationValue(e.target.value);
    setIsChange(true);
  };

  // const getUserOurForm = () => {
  //   const token = window.localStorage.getItem("token");
  //   if (token !== null) {
  //     http.get("/api/v1/user/login", {}, { token: token }).then((res: any) => {
  //       setIdValue(res.data.id);
  //       setEmailValue(res.data.email);
  //       setFirstNameValue(res.data.first_name);
  //       setLastNameValue(res.data.last_name);
  //       // setBirthDateValue(res.data.birth_date);
  //       setAddressValue(res.data.address);
  //       setCityValue(res.data.city);
  //       setStateValue(res.data.state);
  //       setZipCodeValue(res.data.zip_code);
  //       setDriverLicenseValue(res.data.drivers_licence);
  //       setDriverLicenseStateValue(res.data.drivers_licence_state);
  //       setPhoneValue(res.data.phone);
  //       setOccupationValue(res.data.occupation);
  //     });
  //   }
  // };

  // const getUserDefaultForm = () => {
  //   const accountToken = window.localStorage.getItem("accountToken");
  //   if (accountToken !== null) {
  //     const userObj: any = jwt_decode(accountToken);
  //     const email: string = userObj.email
  //       ? userObj.email
  //       : userObj.preferred_username;
  //     axiosConfig
  //       .get(`/api/v1/user/get_by_email?email=${email}`)
  //       .then((res: any) => {
  //         console.log(email);
  //         setIdValue(res.data.id);
  //         setEmailValue(res.data.email);
  //         setFirstNameValue(res.data.first_name);
  //         setLastNameValue(res.data.last_name);
  //         // setBirthDateValue(res.data.birth_date.split("T")[0]);
  //         setAddressValue(res.data.address);
  //         setCityValue(res.data.city);
  //         setStateValue(res.data.state);
  //         setZipCodeValue(res.data.zip_code);
  //         setDriverLicenseValue(res.data.drivers_licence);
  //         setDriverLicenseStateValue(res.data.drivers_licence_state);
  //         setPhoneValue(res.data.phone);
  //         setOccupationValue(res.data.occupation);
  //       });
  //   }
  // };

  const onClickCancel = () => {
    // getUserDefaultForm();
    setIsChange(false);
  };

  const onClickSave = () => {
    // updateUserPersonalInfo();
    setIsChange(false);
  };

  // const updateUserPersonalInfo = () => {
  //   const updateUrl = `/api/v1/user/update_base_info/${idValue}`;
  //   axiosConfig
  //     .patch(updateUrl, {
  //       first_name: firstNameValue,
  //       last_name: lastNameValue,
  //       // birth_date: birthDateValue,
  //       address: addressValue,
  //       city: cityValue,
  //       state: stateValue,
  //       zip_code: zipCodeValue,
  //       drivers_licence: driverLicenseValue,
  //       drivers_licence_state: driverLicenseStateValue,
  //       phone: phoneValue,
  //       occupation: occupationValue,
  //     })
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.error(error));
  // };

  const [files, setFiles] = useState<File[]>([]);
  const [isUploadFile, setIsUploadFile] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsUploadFile(false);
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  // const handleUploadFiles = async () => {
  //   if (!files.length) {
  //     return;
  //   }

  //   const url = "/api/v1/form/upload_policy";
  //   const formData = new FormData();

  //   files.forEach((file) => {
  //     formData.append("documents", file);
  //   });

  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Accept: "multipart/form-data",
  //     },
  //   };

  //   axiosConfig.post(url, formData, config).then((response) => {
  //     setIsUploadFile(true);
  //     console.log(response.data);
  //   });
  // };

  useEffect(() => {
    // getUserOurForm();
    // getUserDefaultForm();
  }, []);

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
            <Typography>Email: </Typography>
            <Typography>First name:</Typography>
            <Typography>Last name:</Typography>
            <Typography>Mobile phone:</Typography>
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
            <Typography>Name: </Typography>
            <Typography>Date of birth:</Typography>
            <Typography>Breed:</Typography>
            <Typography>Gender:</Typography>
            <Typography>Locarion:</Typography>
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
          <Typography>flakhhfalhfalhflahlfahlahflhfa</Typography>
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
