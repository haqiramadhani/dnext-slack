import { ChatInputContainer } from "./ChatInputElements";
import { Button } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, roomId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!roomId) {
      return false;
    }

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName || "ROOM"}`}
        />
        <Button type="submit" onClick={sendMessage} hidden>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
