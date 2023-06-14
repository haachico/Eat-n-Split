import React, { useState } from "react";

function FormAddFriend({ onAddBtn, onShowAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  const handleSubmit = (e) => {
    if (!name || !image) return;
    const id = crypto.randomUUID();
    e.preventDefault();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id: id,
      balance: 0,
    };

    onAddBtn(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?");
    onShowAddFriends(false);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> Friend's name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
}

export default FormAddFriend;
