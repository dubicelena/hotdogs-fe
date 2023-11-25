import { Box } from "@mui/material";
import { Inbox } from "../components/Inbox";

export const ChatScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "20px 0px",
        backgroundColor: "#F4F4F9",
      }}
    >
      <Inbox />

      {/* <ChatBox /> */}
    </Box>
  );

  // wait for TalkJS to load
};
