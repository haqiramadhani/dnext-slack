import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from "./ChatElements";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { ChatInput, Message } from "../";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>

          <HeaderRight>
            <InfoOutlined /> <p>Details</p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {roomMessages?.docs.map((doc, index) => (
            <Message key={index} {...doc.data()} />
          ))}
        </ChatMessages>

        <ChatInput channelName={roomDetails?.data().name} roomId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;
