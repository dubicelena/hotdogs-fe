import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import dog from "../../assets/dog.jpg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { COLORS } from "../../constants/Colors";

export default function CardDog() {
  const number = Math.floor(1 + Math.random() * 5);
  const array = Array.from({ length: number });
  return (
    <Card
      style={{
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Typography
        style={{
          marginBottom: "16px",
          fontWeight: 600,
          fontSize: "24px",
          color: COLORS.BLACK,
        }}
      >
        Rex
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={dog}
        alt="Paella dish"
        style={{ borderRadius: "8px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          justifyContent: "space-between",
        }}
      >
        <PrimaryButton title="View more" />
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {array.map(() => (
            <PetsIcon style={{ marginRight: "8px" }} />
          ))}
        </div>
      </div>
    </Card>
  );
}
