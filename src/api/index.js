import { createRoot } from "react-dom/client";

const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players";

export async function fetchDogs() {
  try {
    const response = await fetch(baseUrl);
    const dogList = await response.json();
    return dogList;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleDog(id) {
  try {
    const response = await fetch(`$(baseUrl)/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export async function postDog(name, email) {
  try {
    const response = await fetch(baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    const createdDog = await response.json();
    return createdDog;
  } catch (error) {
    console.error(error);
  }
}
