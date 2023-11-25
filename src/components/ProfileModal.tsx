import { Box, Modal, Typography } from "@mui/material";
import { styles } from "./style/modal";
import { TEXT } from "../constants/Text";
import PrimaryButton from "./Buttons/PrimaryButton";
import logo from "../assets/logo.png";

// import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose?: () => void;
}

export const ProfileModal = ({ open, onClose }: Props) => {
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
              <Typography>Ime:</Typography>
              <Typography>Prezime:</Typography>
              <Typography>Ime Psa:</Typography>
              <Typography>Broj telefona:</Typography>
              <Typography>Vakcinacija:</Typography>
              <Typography>Rasa:</Typography>
              <Typography>Lokacija:</Typography>
              <Typography>Rodjendan:</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "20px", ml: "10px", mr: "10px", textAlign: "center" }}>
            <Typography>
              f;aiohgflahslghaslghklashgklas
              hlgkhsalhglashlgkhaslghal;shglkashlkgahslghlak
              hglkashglkashsglakhgsalk;hasl;
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDiresction: "row",
              p: 1,
            }}
          >
            <PrimaryButton
              title="Yes"
              // handleButtonClick={() => setIsOpenregistratinModal(true)}
              sx={{
                width: "80%",
                mt: "20px",
                mr: "20px",
              }}
            />
            <PrimaryButton
              title="No"
              // handleButtonClick={() => setIsOpenregistratinModal(true)}
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
