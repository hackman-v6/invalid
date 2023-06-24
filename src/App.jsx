import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<Login setToken={setToken} />} />
        {token && (
          <Route path={"/homepage"} element={<Homepage token={token} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
