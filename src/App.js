import React, { useEffect, useState } from "react";
import Navigation from "./components/NavigationBar.js";
import { Routes, Route } from "react-router-dom";
import Orders from "./screens/Orders.js";
import RoomsAvailable from "./screens/RoomsAvailable.js";
import Invoices from "./screens/Invoices.js";
import Home from "./screens/Home.js";
import { createContext } from "react";
import axios from "axios";

export const RoomContext = createContext();

function App() {
  const [roomsData, setRoomsData] = useState([]);

  const fetchRoomsData = () => {
    axios
      .get("http://localhost:5000/rooms")
      .then((response) => {
        setRoomsData(response.data.data);
        // console.log(response.data.data);
      });
  };

  useEffect(fetchRoomsData, []);
  return (
    <>
      <RoomContext.Provider value={roomsData}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route
            path="/rooms"
            element={<RoomsAvailable/>}
          ></Route>
          <Route path="/invoices" element={<Invoices />}></Route>
        </Routes>
      </RoomContext.Provider>
    </>
  );
}

export default App;
