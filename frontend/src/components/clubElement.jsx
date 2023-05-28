import React, { useState } from 'react';

const ClubElement = ({ club, isClubHead }) => {
  const [budget, setBudget] = useState(club.budget);
  const [subtractAmount, setSubtractAmount] = useState('');

  const handleBudgetChange = (event) => {
    const newBudget = parseInt(event.target.value);
    setBudget(newBudget);
  };

  const handleSubtract = async () => {
    const amount = parseInt(subtractAmount);
    if (amount <= budget) {
      const updatedBudget = budget - amount;
      setBudget(updatedBudget);
      setSubtractAmount('');

      try {
        // Placeholder function to update the budget in MongoDB
        await updateBudgetInMongoDB(updatedBudget);
        console.log('Budget updated in MongoDB');
      } catch (error) {
        console.log('Error updating budget in MongoDB:', error);
        // Handle error if necessary
      }
    }
  };

  // Placeholder function to update the budget in MongoDB
  const updateBudgetInMongoDB = async (updatedBudget) => {
    // Perform API call or backend operation to update the budget in MongoDB
    // Example: Send an HTTP request to the backend API endpoint
    // Make sure to implement the appropriate backend functionality to update the budget
    // You can use libraries like Axios or fetch to perform the HTTP request
    // Here's an example using Axios:
    // await axios.put('/api/clubs/updateBudget', { clubId: club.id, budget: updatedBudget });
    // Adjust the endpoint and payload based on your backend implementation
  };

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
            <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded overflow-hidden">
            <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
        </div>
        <div class="text-center mt-2">
            <h2 class="font-semibold">{club.name}</h2>
            <p class="text-gray-500">{club.description}</p>
        </div>
          {isClubHead && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Budget: {budget}</h3>
              <div className="flex items-center mt-2">
                <label htmlFor="subtractAmount" className="mr-2">
                  Subtract Amount:
                </label>
                <input
                  type="text"
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
          )}
    </div>
  );
};

export default ClubElement;
