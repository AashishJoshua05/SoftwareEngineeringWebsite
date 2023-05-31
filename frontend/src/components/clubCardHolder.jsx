import React, { useState, useEffect } from "react";
import axios from "axios";
import ClubEvent from "./clubCard";

const ClubsList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clubs");
      setClubs(response.data);
    } catch (error) {
      console.error("Failed to fetch clubs:", error);
      // Handle error if necessary
    }
  };

  return (
    <div className="bg-gray-300 flex flex-row">
      <h1 className="">Clubs</h1>
      {clubs.map((club) => (
        <ClubEvent club={club} key={club._id} />
      ))}
    </div>
  );
};

export default ClubsList;
