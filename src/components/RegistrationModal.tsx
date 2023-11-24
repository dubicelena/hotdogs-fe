import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./style/registrationModal";
import { TEXT } from "../constants/Text";
// import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  // sx?: SxProps<Theme>;
  onClose?: () => void;
}

export const RegistrationModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.container}>
        <Typography sx={{ fontStyle: TEXT.headerOne }}>
          Register your Hot Dogs account
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              autoFocus
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              autoFocus
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="First name"
              autoFocus
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last name"
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mobile Number"
              autoFocus
              color="secondary"
            />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ mt: "16px", mb: "8px", ml: "20px", mr: "20px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Dog name"
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date of birth"
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Gender"
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Breed"
              color="secondary"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Location"
              color="secondary"
            />
          </Box>
        </Box>
        <Button
          sx={{
            height: "40px",
            width: "100%",
            backgroundColor: "black",
            mt: "20px",
          }}
        >
          Registration Now
        </Button>
      </Box>
    </Modal>
  );
};
