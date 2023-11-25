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

export const DashboardScreen = () => {
  return (
    <div
      style={{
        margin: "0px 30px",
        flex: "auto !important",
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
            width: "50%",
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
              width: "50%",
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
            width: "50%",
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
            // value={age}
            label="Gender"
            color="secondary"
            // onChange={handleChange}
            style={{
              width: "50%",
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
            flexWrap: "wrap",
            height: "100%",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ height: "60%" }}
          >
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: COLORS.PURPLE,
                  margin: "10px",
                  width: "90%",
                  height: "90%",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: COLORS.PURPLE,
                  margin: "10px",
                  width: "90%",
                  height: "90%",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: COLORS.PURPLE,
                  margin: "10px",
                  width: "90%",
                  height: "90%",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: COLORS.PURPLE,
                  margin: "10px",
                  width: "90%",
                  height: "90%",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
          </Grid>
          <div
            style={{
              width: "100%",
              height: "30px",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Pagination
              size="small"
              count={4}
              //   page={resultPage.page}
              defaultPage={1}
              showFirstButton
              shape="rounded"
              showLastButton
              siblingCount={1}
              boundaryCount={1}
              color="secondary"
              //   onChange={handleChangePage}
            />
          </div>
        </div>

        <Box
          style={{ width: "50%", height: "80%", backgroundColor: COLORS.BLACK }}
        ></Box>
      </div>
    </div>
    // <Box style={{ display: "flex", height: "100vh" }}>
    //   <Box style={{ width: "50%", display: "flex", flexWrap: "wrap" }}>
    //     <Box
    //       style={{
    //         backgroundColor: COLORS.BLACK,
    //         margin: "10px",
    //         width: "40%",
    //         height: "25%",
    //       }}
    //     ></Box>
    //     <Box
    //       style={{
    //         backgroundColor: COLORS.BLACK,
    //         margin: "10px",
    //         width: "40%",
    //         height: "25%",
    //       }}
    //     ></Box>
    //     <Box
    //       style={{
    //         backgroundColor: COLORS.BLACK,
    //         margin: "10px",
    //         width: "40%",
    //         height: "25%",
    //       }}
    //     ></Box>
    //     <Box
    //       style={{
    //         backgroundColor: COLORS.BLACK,
    //         margin: "10px",
    //         width: "40%",
    //         height: "25%",
    //       }}
    //     ></Box>
    //   </Box>
    //   <Box style={{ width: "50%" }}>DRUGI</Box>
    // </Box>
  );
};
