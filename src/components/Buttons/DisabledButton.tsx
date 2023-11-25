import { Typography, Button, Theme, SxProps } from "@mui/material";

interface Props {
  title: string;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  handleButtonClick?: () => void;
}

const style = {
  button: {
    height: "42px",
    borderRadius: "20px",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  buttonText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
};

const DisabledButton = ({ title, sx, disabled, handleButtonClick }: Props) => {
  return (
    <Button
      sx={{ ...style.button, ...sx }}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      <Typography sx={style.buttonText}>{title}</Typography>
    </Button>
  );
};

export default DisabledButton;
