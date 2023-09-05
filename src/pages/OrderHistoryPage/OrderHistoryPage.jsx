import NavBar from '../../components/NavBar/NavBar';
import { getUser } from "../../utilities/users-service";
import { useState } from "react";

export default function OrderHistoryPage() {
    const [user, setUser] = useState(getUser());
    
    const centered = {
      textAlign: 'center', // Center text horizontally
      marginTop: '20px',   // Add top margin for spacing
    };
    
    return (
      <div>
          <NavBar user={user} setUser={setUser} />
          <p style={centered}>Tomatoes are gay</p>
      </div>
    )
}