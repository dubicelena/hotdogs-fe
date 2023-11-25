import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PetsIcon from "@mui/icons-material/Pets";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { COLORS } from "../../constants/Colors";

interface Props {
  setIsOpenProfileModal: (value: boolean) => void;
  data: any;
  setProfileID: (value: number) => void;
}

export const CardDog = ({
  setIsOpenProfileModal,
  data,
  setProfileID,
}: Props) => {
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
        {data.dogName}
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={`data:image/jpeg;base64,${data.photo}`}
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
        <PrimaryButton
          title="View more"
          handleButtonClick={() => {
            setIsOpenProfileModal(true);
            setProfileID(data.id);
          }}
        />
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
};
