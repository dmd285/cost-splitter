import { useState } from "react";
import Button from "./Button";
import FromAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendsList from "./FriendsList";

export default function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "David",
      image: "https://www.emotionsinflorence.com/image/david_09.jpg",
      balance: -7,
    },
    {
      id: 933372,
      name: "Mary",
      image:
        "https://miro.medium.com/v2/resize:fit:980/1*rWE7TAw7bZ01gIt8ogAfBw.jpeg",
      balance: 20,
    },
    {
      id: 499476,
      name: "Bacchus",
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/bacchus-detail-1497-michelangelo-buonarroti.jpg",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FromAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}
