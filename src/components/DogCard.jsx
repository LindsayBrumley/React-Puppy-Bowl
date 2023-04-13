import React, { useEffect, useState } from "react";

export default function DogCard({ dog }) {
  console.log(dog);
  return (
    <div>
      <p
        key={dog.id}
        onClick={(dog) => {
          navigate(`/${dog.id}`);
        }}
      >
        {dog.name}
      </p>
    </div>
  );
}
