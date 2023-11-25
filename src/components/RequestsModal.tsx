import { Box, Modal, Typography } from "@mui/material";
import { styles } from "./style/modal";
import { TEXT } from "../constants/Text";
import PrimaryButton from "./Buttons/PrimaryButton";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LinkButton from "./Buttons/LinkButton";
import { ProfileModal } from "./ProfileModal";

// import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  isLogin?: boolean;
  onClose?: () => void;
  setIsOpenRequestModal: (value: boolean) => void;
}

export const RequestModal = ({
  open,
  onClose,
  isLogin = true,
  setIsOpenRequestModal,
}: Props) => {
  const [requests, setRequests] = useState<any>([]);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const [profileId, setProfileId] = useState<number>(0);
  const loggedUserId = localStorage.getItem("userId");

  const getRequests = useCallback(async () => {
    await axios({
      method: "get",
      url: `http://192.168.17.45:9099/api/v0/match-requests/${loggedUserId}/recipient-requests`,
    })
      .then((response) => {
        setRequests(response.data);
        // console.log(response);
        setIsOpenRequestModal(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [loggedUserId, setIsOpenRequestModal]);

  const requestAnswer = useCallback(
    async (id: number, status: string) => {
      await axios({
        method: "put",
        url: `http://192.168.17.45:9099/api/v0/match-requests/${id}?requestStatus=${status}`,
      })
        .then((response) => {
          setRequests(response.data);
          // console.log(response);
          setIsOpenRequestModal(false);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [setIsOpenRequestModal]
  );

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={styles.containerLogin}>
          <Typography sx={{ fontStyle: TEXT.headerOne }}>
            Match requests
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {requests.map((item: any) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Name: {item.sender.dogName}</Typography>
                <LinkButton
                  title="View"
                  handleButtonClick={() => {
                    setIsOpenProfileModal(true);
                    setProfileId(item.sender.id);
                  }}
                />
                <LinkButton
                  title="Yes"
                  handleButtonClick={() => requestAnswer(item.id, "ACCEPTED")}
                />
                <LinkButton
                  title="No"
                  handleButtonClick={() => requestAnswer(item.id, "DENIED")}
                />
              </div>
            ))}

            <PrimaryButton
              title="Close"
              handleButtonClick={() => {
                setIsOpenRequestModal(false);
              }}
              sx={{
                width: "100%",
                mt: "20px",
              }}
            />
          </Box>
        </Box>
      </Modal>
      {isOpenProfileModal ? (
        <ProfileModal
          data={
            requests.filter((item: any) => item.sender.id === profileId)[0]
              .sender
          }
          setIsOpenProfileModal={setIsOpenProfileModal}
          open={isOpenProfileModal}
          fromRequest={true}
        />
      ) : null}
    </>
  );
};
