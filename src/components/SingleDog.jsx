import React, { useEffect, useState } from "react";
import { fetchSingleDog } from "../api";
import { useParams } from "react-router-dom";

export default function SingleDog() {
  const { dogId } = useParams();
  const params = useParams(null);

  useEffect(() => {
    async function getDog() {
      const dogFromApi = await fetchSingleDog(dogId);
      ssetDog(dogFromApi);
    }
    getDog();
  }, []);

  return (
    <div>
      {dog && (
        <ul>
          <li>Name: {dog.name}</li>
          <li>Age: {dog.age}</li>
        </ul>
      )}
    </div>
  );
}
