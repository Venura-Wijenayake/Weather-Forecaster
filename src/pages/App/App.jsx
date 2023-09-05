import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import TrackerTablePage from "../TrackerTablePage/TrackerTablePage";


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <main className="w-full flex justify-center items-center">
        {user ?
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
            <Route path="/tracker" element={<TrackerTablePage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
          :
          <AuthPage setUser={setUser} />
        }
      </main>
    </div>
  );
}
