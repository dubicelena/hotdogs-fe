import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { COLORS } from "../../constants/Colors";
import CardDog from "./CardDog";
import map from "../../assets/map.jpeg";

export const DashboardScreen = () => {
  return (
    <div
      style={{
        margin: "0px 30px",
      }}
    >
      <Box
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormControl
          fullWidth
          sx={{
            width: "20%",
            marginTop: "20px",
            marginLeft: "8px",
            marginBottom: "16px",
            marginRight: "16px",
            "& label.Mui-focused": {
              color: COLORS.PURPLE,
              borderRadius: "2px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Gender"
            color="secondary"
            // onChange={handleChange}
            style={{
              height: "50px",
            }}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            width: "20%",
            marginTop: "20px",
            marginLeft: "8px",
            marginBottom: "16px",
            marginRight: "16px",
            "& label.Mui-focused": {
              color: COLORS.PURPLE,
              borderRadius: "2px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            color="secondary"
            style={{
              height: "50px",
            }}
          >
            <MenuItem value={10}>One</MenuItem>
            <MenuItem value={20}>Two</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ display: "flex", height: "100vh", maxHeight: "1100p" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "80%" }}>
            <Grid
              sx={{
                display: "grid",
                gridTemplateColumns: "50% 50%",
                gap: "32px",
                height: "100%",
                width: "100%",
                paddingRight: "50px",
              }}
            >
              <CardDog />
              <CardDog />
              <CardDog />
              <CardDog />
            </Grid>
          </div>
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              size="small"
              count={4}
              defaultPage={1}
              showFirstButton
              shape="rounded"
              showLastButton
              siblingCount={1}
              boundaryCount={1}
              color="secondary"
            />
          </div>
        </div>
        <Box
          style={{
            width: "50%",
            height: "79%",
            backgroundColor: COLORS.BLACK,
            borderRadius: "10px",
          }}
        >
          <Box
            component="img"
            src={map}
            height="464px"
            width="537px"
            alt="map"
            sx={{
              height: "100%",
              width: "100%",
              alignSelf: "center",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>
      </div>
    </div>
  );
};
