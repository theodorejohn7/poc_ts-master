import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import RegisterApp from "./pages/RegisterApp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Todo from "./Redux/Todo/Todo"
function App() {
  return (
    <div className="App">
      <Home />

      <Routes>
        <Route path="/" />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route
          path="login"
          element={<Login />}
          // element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
        />
        <Route path="register" element={<RegisterApp />} />
        <Route path="todo" element={<Todo />} />

      </Routes>
    </div>
  );
}

export default App;
