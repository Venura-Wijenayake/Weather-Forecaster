import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <main className="w-full flex justify-center items-center">
        {user ?
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
          :
          <AuthPage setUser={setUser} />
        }
      </main>
    </div>
  );
}
