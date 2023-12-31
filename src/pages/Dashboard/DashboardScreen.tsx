import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import { COLORS } from "../../constants/Colors";
import { CardDog } from "./CardDog";
import map from "../../assets/map.jpeg";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ProfileModal } from "../../components/ProfileModal";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LinkButton from "../../components/Buttons/LinkButton";
import { RequestModal } from "../../components/RequestsModal";

axios.defaults.withCredentials = true;

export const DashboardScreen = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [isOpenRequestModal, setIsOpenRequestModal] = useState(false);
  const [dogs, setDogs] = useState<any>([]);
  const [profileId, setProfileId] = useState<number>(0);
  const [updateData, setUpdateData] = useState<boolean>(false);
  const loggedUserId = localStorage.getItem("userId");

  const getDogList = useCallback(async () => {
    await axios({
      method: "get",
      url: `http://192.168.17.45:9099/api/v0/users/${loggedUserId}/find-users?radius=${5}&page=${1}`,
    })
      .then((response) => {
        setDogs(response.data.content);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [loggedUserId]);

  useEffect(() => {
    getDogList();
  }, [getDogList]);

  useEffect(() => {
    if (updateData) getDogList();
    setUpdateData(false);
  }, [getDogList, updateData]);

  return (
    <div
      style={{
        margin: "0px 30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <NotificationImportantIcon
            style={{ color: COLORS.BLACK, marginRight: "8px" }}
          />
          <Typography style={{ fontWeight: 600, fontFamily: "Poppins" }}>
            SEE YOUR MATCH REQUEST
          </Typography>
          <LinkButton
            title="HERE"
            handleButtonClick={() => setIsOpenRequestModal(true)}
          />
        </div>
      </div>
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
              {dogs.map((item: any) => (
                <CardDog
                  setIsOpenProfileModal={setIsOpenProfileModal}
                  data={item}
                  setProfileID={setProfileId}
                />
              ))}
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
              width: "95%",
              alignSelf: "center",
              borderRadius: "10px",
              marginLeft: "30px",
            }}
          ></Box>
        </Box>
      </div>
      {isOpenProfileModal ? (
        <ProfileModal
          open={isOpenProfileModal}
          setIsOpenProfileModal={setIsOpenProfileModal}
          data={dogs.filter((item: any) => item.id === profileId)[0]}
          setUpdateData={setUpdateData}
        />
      ) : null}
      {isOpenRequestModal ? (
        <RequestModal
          open={isOpenRequestModal}
          setIsOpenRequestModal={setIsOpenRequestModal}
          // data={dogs.filter((item: any) => item.id === profileId)[0]}
          // setUpdateData={setUpdateData}
        />
      ) : null}
    </div>
  );
};
