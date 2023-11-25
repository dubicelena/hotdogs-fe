import { Box, Modal, Typography } from "@mui/material";
import { styles } from "./style/modal";
import { TEXT } from "../constants/Text";
import PrimaryButton from "./Buttons/PrimaryButton";
import logo from "../assets/logo.png";
import axios from "axios";

// import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose?: () => void;
  setIsOpenProfileModal: (value: boolean) => void;
  data: any;
  setUpdateData?: (value: boolean) => void;
  fromRequest?: boolean;
}

export const ProfileModal = ({
  open,
  onClose,
  setIsOpenProfileModal,
  data,
  setUpdateData,
  fromRequest,
}: Props) => {
  const loggedUserId = localStorage.getItem("userId");

  const sendRequest = async () => {
    await axios({
      method: "post",
      url: `http://192.168.17.45:9099/api/v0/match-requests/${loggedUserId}/${data.id}`,
    })
      .then((response) => {
        setIsOpenProfileModal(false);
        setUpdateData && setUpdateData(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.containerProfile}>
        <Typography sx={{ fontStyle: TEXT.headerOne }}>Dog Profile</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            mt: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItem: "center",
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
                width: "100%",
                display: "flex",
                flexDirection: "column",
                ml: "30px",
              }}
            >
              <Typography>Ime: {data.firstName}</Typography>
              <Typography>Prezime: {data.lastName}</Typography>
              <Typography>Ime Psa: {data.dogName}</Typography>
              <Typography>Broj telefona: {data.phoneNumber}</Typography>
              <Typography>
                Vakcinacija: {data.vaccinated ? data.vaccinated : false}
              </Typography>
              <Typography>Rasa: {data.breed.name}</Typography>
              <Typography>Rodjendan: {data.dateOfBirth}</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "20px", ml: "10px", mr: "10px", textAlign: "center" }}>
            <Typography>{data.description ? data.description : ""}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDiresction: "row",
              p: 1,
            }}
          >
            {!fromRequest && (
              <PrimaryButton
                title="Yes"
                handleButtonClick={() => sendRequest()}
                sx={{
                  width: "80%",
                  mt: "20px",
                  mr: "20px",
                }}
              />
            )}
            <PrimaryButton
              title={!fromRequest ? "No" : "Cancel"}
              handleButtonClick={() => setIsOpenProfileModal(false)}
              sx={{
                width: "80%",
                mt: "20px",
                ml: "20px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
