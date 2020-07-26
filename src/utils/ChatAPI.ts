import axios from "axios";

export interface FriendStatusRes {
  id: number;
  isOnline: boolean;
}

const ChatAPI = {
  subscribeToFriendStatus: (
    id: number,
    callback: (res: FriendStatusRes) => void
  ) => {
    axios
      .post<FriendStatusRes>("/api/friendStatus", { id, subscribe: true })
      .then(res => {
        callback(res.data);
      });
  },
  unsubscribeFromFriendStatus: (
    id: number,
    callback: (res: FriendStatusRes) => void
  ) => {
    axios.post("/api/friendStatus", { id, subscribe: false }).then(res => {
      callback(res.data);
    });
  }
};

export { ChatAPI };
