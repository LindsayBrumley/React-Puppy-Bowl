import React, { useState } from "react";
import { postDog } from "../api";
import { useNavigate } from "react-router-dom";
import "../app.css";

export default function CreateDogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form">
      <h2 className="create">Create a new Doggo!</h2>
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
