import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

export const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

export const MessageAvatar = styled(Avatar)`
  height: 50px !important;
  width: 50px !important;
  border-radius: 8px !important;
`;
