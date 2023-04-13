import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDogs } from "../api";
import React from "react";
// import DogCard from "./DogCard";

export default function AllDogs() {
  const navigate = useNavigate([]);

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      try {
        const dogList = await fetchDogs();
        console.log("dogList:", dogList);
        setDogs(dogList.data.players);
      } catch (error) {
        console.error("failed to fetch dogs", error);
      }
    }
    getDogs();
  }, []);
  console.log(dogs);

  return (
    <div>
      {dogs.map((dog) => {
        {
          console.log(dog);
        }
        return (
          <div>
            {dogs.map((dog) => (
              <div key={dog.id}>
                <img src={dog.imageUrl} alt={dog.name} />
                <p
                  onClick={() => {
                    navigate(`/${dog.id}`);
                  }}
                >
                  {dog.name}
                </p>
              </div>
            ))}
          </div>
        );
      })}
      {/* <p
        key={dog.id}
        onClick={(dog) => {
          navigate(`/${dog.id}`);
        }}
      >
        {dog.name}
      </p> */}
    </div>
  );
}
