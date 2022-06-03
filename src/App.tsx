import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import RegisterApp from "./pages/RegisterApp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Todo from "./Redux/Todo/Todo";
import ErrorSource from "./errorBoundary/ErrorSource";
import { RequireAuth } from "./route/RequireAuth";
import { AuthProvider } from "./route/Auth";
import Welcome from "./pages/Welcome";
import ErrorBoundaries from "./errorBoundary/ErrorBoundaries";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Home />

        <Routes>
          <Route path="/" />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterApp />} />

          <Route
            path="welcome"
            element={
              <RequireAuth>
                <Welcome />
              </RequireAuth>
            }
          />

          <Route
            path="error"
            element={
              <RequireAuth>
                <ErrorBoundaries>
                  <ErrorSource />
                </ErrorBoundaries>
              </RequireAuth>
            }
          />

          <Route
            path="todo"
            element={
              <RequireAuth>
                <Todo />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
