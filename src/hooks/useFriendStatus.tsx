// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { ChatAPI, FriendStatusRes } from "../utils/ChatAPI";

function useFriendStatus(friendId: number) {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  function handleStatusChange(status: FriendStatusRes) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  }, [friendId]);

  return isOnline;
}

export default useFriendStatus;
