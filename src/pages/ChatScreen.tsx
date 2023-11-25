import { Box } from "@mui/material";
import { ChatBox } from "../components/ChatBox";
import { Inbox } from "../components/Inbox";

export const ChatScreen = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Inbox />
      {/* <ChatBox /> */}
    </Box>
  );

  // wait for TalkJS to load
};
