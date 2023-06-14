import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

import { useState } from "react";
import { initialFriends } from "./data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelection = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowFriend(false);
  };

  const handleClick = () => {
    setShowFriend((prevState) => !prevState);
  };

  const handleAddBtn = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  const handleSplit = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  console.log(selectedFriend, "SELECTED");
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            onAddBtn={handleAddBtn}
            onShowAddFriends={setShowFriend}
          />
        )}
        <button className="button" onClick={handleClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplit}
        />
      )}
    </div>
  );
}

export default App;
