import { ChatInputContainer } from "./ChatInputElements";
import { Button } from "@material-ui/core";
import { useState } from "react";
import firebase from "firebase";
import { db } from "../../firebase";

function ChatInput({ channelName, roomId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!roomId) {
      return false;
    }

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Haqi Ramadhani",
      userImage: "",
    });

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
