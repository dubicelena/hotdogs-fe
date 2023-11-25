import { Typography, Button, Theme, SxProps } from "@mui/material";
import { COLORS } from "../../constants/Colors";
interface Props {
  title: string;
  sx?: SxProps<Theme>;
  handleButtonClick?: () => void;
}
const style = {
  button: {
    height: "42px",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: COLORS.BLACK,
    "&:hover": {
      backgroundColor: COLORS.BLACK,
      opacity: 0.8,
    },
  },
  buttonText: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Outfit, sans-serif",
    color: COLORS.WHITE,
    textTransform: "capitalize",
  },
};
const PrimaryButton = ({ title, sx, handleButtonClick }: Props) => {
  const handleClick = () => {
    if (handleButtonClick) {
      handleButtonClick();
    }
  };
  return (
    <Button
      sx={{
        ...style.button,
        ...sx,
      }}
      onClick={handleClick}
    >
      <Typography sx={style.buttonText}>{title}</Typography>
    </Button>
  );
};
export default PrimaryButton;
