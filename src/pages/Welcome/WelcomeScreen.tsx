import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/backgroundImage.png";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useState } from "react";
import { RegistrationModal } from "../../components/RegistrationModal";
import { LoginModal } from "../../components/LoginModal";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/Colors";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
  },
  content: {
    width: "38%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    // backgroundColor: "white",
  },
  image: {
    marginTop: "-3px",
    height: "570px",
    width: "570px",
    borderRadius: "500px",
  },
  text: {
    fontSize: "32px",
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: "20px",
  },
  linkButton: {
    margin: "20px 40px -13px",
    backgroundColor: COLORS.BLACK,
    width: "50%",
    "&:hover": {
      backgroundColor: COLORS.PINK,
      opacity: 1,
    },
  },
};

export const WelcomeScreen = () => {
  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Box>
        <PrimaryButton
          title="Login"
          sx={styles.linkButton}
          handleButtonClick={() => {
            setIsOpenLoginModal(true);
          }}
        />
      </Box>
      <Box sx={styles.content}>
        <Box
          component="img"
          src={logo}
          height="464px"
          width="537px"
          alt="logo"
          sx={styles.image}
        ></Box>
        <Typography sx={styles.text}>SWIPE YOUR DOG</Typography>
        <PrimaryButton
          title="Create account"
          handleButtonClick={() => setIsOpenRegistrationModal(true)}
          sx={{
            mb: "30px",
            "&:hover": {
              backgroundColor: COLORS.PINK,
              opacity: 1,
            },
          }}
        />
      </Box>
      {isOpenRegistrationModal && (
        <RegistrationModal
          open={isOpenRegistrationModal}
          onClose={() => setIsOpenRegistrationModal(false)}
          setOpen={setIsOpenRegistrationModal}
          setOpenLogin={setIsOpenLoginModal}
        />
      )}
      {isOpenLoginModal && (
        <LoginModal
          open={isOpenLoginModal}
          onClose={() => setIsOpenLoginModal(false)}
        />
      )}
    </Box>
  );
};
