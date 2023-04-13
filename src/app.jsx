import { Routes, Route, Link } from "react-router-dom";
import AllDogs from "./components/AllDogs";
import SingleDog from "./components/SingleDog";
import CreateDogForm from "./components/CreateDogForm";
import "./app.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllDogs />} />
        <Route path="/:dogId" element={<SingleDog />} />
        <Route path="/form" element={<CreateDogForm />} />
      </Routes>
    </div>
  );
}

export default App;
