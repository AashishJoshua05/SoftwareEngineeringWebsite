import React, { useState } from "react";
import axios from "axios";

const ClubEvent = ({ club }) => {
  const [subtractAmount, setSubtractAmount] = useState("");

  const handleSubtract = async () => {
    const amount = parseInt(subtractAmount);
    if (amount > 0 && amount <= club.budget) {
      try {
        const updatedBudget = club.budget - amount;
        const response = await axios.put(
          `http://localhost:5000/api/clubs/updateBudget/${club._id}`, // Update the URL to use club._id
          { budget: updatedBudget }
        );
        console.log(response.data.message);
        setSubtractAmount(""); // Clear the subtract amount input field
        club.budget = updatedBudget; // Update the budget in the current component state
      } catch (error) {
        console.error("Failed to update budget:", error);
        // Handle error if necessary
      }
    } else {
      console.error("Invalid subtract amount");
      // Handle error if necessary (e.g., show an error message to the user)
    }
  };

  return (
    <div key={club._id} className="flex flex-wrap">
      <div className="bg-slate m-4 border-8 rounded-md ">
        <div className=" pb-4 bg-rose-400 rounded-md">
          <h2>{club.name}</h2>
        </div>
        <p>Description: {club.description}</p>
        <p>Head: {club.head}</p>
        <p>Contact Number: {club.contactNumber}</p>
        <p>Email Address: {club.emailAddress}</p>
        <div>
          <p>Budget: {club.budget}</p>
        </div>
        <div className="flex items-center mt-2 border-4 ">
          <label htmlFor="subtractAmount" className="mr-2">
            Subtract Amount:
          </label>
          <input
            type="number"
            id="subtractAmount"
            value={subtractAmount}
            onChange={(e) => setSubtractAmount(e.target.value)}
            className="w-24 h-8 px-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleSubtract}
            className="ml-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded"
          >
            Subtract
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ClubEvent;
