import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export const Inbox = () => {
  const inboxEl: any = useRef();
  const [talkLoaded, markTalkLoaded] = useState(false);
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (
      talkLoaded &&
      userId !== null &&
      userName !== null &&
      userEmail !== null
    ) {
      const currentUser = new Talk.User({
        id: userId,
        name: userName,
        email: [userEmail],
      });

      const session = new Talk.Session({
        appId: "tkW3IJF7",
        me: currentUser,
      });

      const chatbox = session.createInbox();
      chatbox.mount(inboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded, userEmail, userId, userName]);

  return <div ref={inboxEl} style={{ flex: 1, height: "800px" }} />;
};
