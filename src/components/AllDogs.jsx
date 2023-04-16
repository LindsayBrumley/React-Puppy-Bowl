import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDogs, deleteDog } from "../api";
import React from "react";

export default function AllDogs() {
  const navigate = useNavigate([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const dogList = await fetchDogs();
      setDogs(dogList.data.players);
    }
    getDogs();
  }, []);

  return (
    <div className="single-dog-card">
      {dogs.map((dog) => {
        return (
          <div key={dog.id}>
            <img
              style={{ height: "300px" }}
              src={dog.imageUrl}
              alt={dog.name}
            />
            <br></br>
            <button
              onClick={() => {
                navigate(`/${dog.id}`);
              }}
            >
              {dog.name} Info
            </button>
            <br></br>
            <button
              onClick={async () => {
                await deleteDog(dog.id);
                const dogList = await fetchDogs();
                setDogs(dogList.data.players);
              }}
            >
              Retire Pup
            </button>
          </div>
        );
      })}
    </div>
  );
}
