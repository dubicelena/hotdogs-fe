import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import LinkButton from "../../components/Buttons/LinkButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useState } from "react";
import { RegistrationModal } from "../../components/RegistrationModal";
import { LoginModal } from "../../components/LoginModal";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  content: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    marginTop: "20px",
  },
  text: {
    fontSize: "32px",
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: "20px",
  },
  linkButton: {
    margin: "20px 20px 0px",
  },
};

export const WelcomeScreen = () => {
  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Box>
        <LinkButton
          title="Login"
          sx={styles.linkButton}
          handleButtonClick={() => navigate("/dashboard")}
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
        />
      </Box>
      {isOpenRegistrationModal && (
        <RegistrationModal
          open={isOpenRegistrationModal}
          onClose={() => setIsOpenRegistrationModal(false)}
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
