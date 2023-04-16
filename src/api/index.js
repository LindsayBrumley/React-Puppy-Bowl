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
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
}

export async function postDog(name, breed) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        breed,
      }),
    });
    const createdDog = await response.json();
    return createdDog;
  } catch (error) {
    console.error(error);
  }
}

export const deleteDog = async (playerId) => {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
