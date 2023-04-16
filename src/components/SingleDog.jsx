import React, { useEffect, useState } from "react";
import { fetchSingleDog } from "../api";
import { useParams } from "react-router-dom";

export default function SingleDog() {
  const { dogId } = useParams();
  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    async function getDog() {
      setSingleDog(await fetchSingleDog(dogId));
    }
    getDog();
  }, []);

  function isEven(dogId) {
    if (dogId % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(singleDog);
  return (
    <div>
      <h2>Name: {singleDog.name}</h2>
      {isEven(singleDog.id) ? <p>Breed: {singleDog.breed}</p> : null}
    </div>
  );
}
