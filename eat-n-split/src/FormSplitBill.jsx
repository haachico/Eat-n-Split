import React, { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billAmount, setBillAmount] = useState("");
  const [amountPaidByUser, setAmountPaidByUser] = useState("");
  const [whoWillPay, setWhoWiillPay] = useState("user");

  console.log(billAmount, amountPaidByUser, whoWillPay);

  const amountPaidByFriend = billAmount - amountPaidByUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!billAmount || !amountPaidByUser) return;

    onSplitBill(whoWillPay === "user" ? amountPaidByFriend : -amountPaidByUser);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={amountPaidByUser}
        onChange={(e) =>
          e.target.value > billAmount
            ? amountPaidByUser
            : setAmountPaidByUser(Number(e.target.value))
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={amountPaidByFriend} />

      <label>Who's gonna pay the bill?</label>
      <select
        value={whoWillPay}
        onChange={(e) => setWhoWiillPay(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split</button>
    </form>
  );
}

export default FormSplitBill;
