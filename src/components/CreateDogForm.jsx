import React, { useState } from "react";
import { postDog } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateDogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Create a new Doggo!</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const newDog = await postDog(name, breed);
          navigate("/");
        }}
      >
        <label> Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label> Breed:</label>
        <input type="text" onChange={(e) => setBreed(e.target.value)} />
        <button>Submit!</button>
      </form>
    </div>
  );
}
