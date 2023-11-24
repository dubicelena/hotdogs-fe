import { Typography, Button, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../../constants/Colors";
interface Props {
  title: string;
  sx?: SxProps<Theme>;
  handleButtonClick?: () => void;
}

const style = {
  button: {
    height: "42px",
    "&:hover": {
      backgroundColor: "transparent",
      color: COLORS.PINK,
      opacity: 0.7,
    },
  },
  buttonText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: COLORS.PINK,
    textTransform: "none",
  },
};

const LinkButton = ({ title, sx, handleButtonClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    if (handleButtonClick) {
      handleButtonClick();
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };
  return (
    <Button sx={{ ...style.button, ...sx }} onClick={handleClick}>
      <Typography
        sx={{
          ...style.buttonText,
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
export default LinkButton;
