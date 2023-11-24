import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import LinkButton from "../../components/Buttons/LinkButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

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
  return (
    <Box sx={styles.container}>
      <Box>
        <LinkButton title="Login" sx={styles.linkButton} />
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
        <PrimaryButton title="Create account" />
      </Box>
    </Box>
  );
};
