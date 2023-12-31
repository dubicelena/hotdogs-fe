import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export const ChatBox = () => {
  const chatboxEl: any = useRef();
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "2",
        name: "John",
        email: ["admin@gmail.com"],
        // photoUrl: "henry.jpeg",
        // welcomeMessage: "Hello!",
        // role: "default",
      });

      const otherUser = new Talk.User({
        id: "3",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tkW3IJF7",
        me: currentUser,
      });

      //   const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversationId = "2_5";
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} style={{ flex: 1 }} />;
};
