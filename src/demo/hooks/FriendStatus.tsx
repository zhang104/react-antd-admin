import React, { useDebugValue } from "react";
import useFriendStatus from "../../hooks/useFriendStatus";

interface FriendStatusProps {
  friend: {
    id: number;
  };
}

const FriendStatus: React.FC<FriendStatusProps> = props => {
  const isOnline = useFriendStatus(props.friend.id);
  
  useDebugValue(isOnline ? "Online" : "Offline");

  if (isOnline === null) {
    return <div>Loading...</div>;
  }

  return isOnline ? <div>Online</div> : <div>Offline</div>;
};

export default FriendStatus;
