import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className='text-yellow-600' to="/home">Home Page</Link>
      &nbsp; | &nbsp;
      <Link className='text-yellow-600' to="/tracker">Tracker Table</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;<Link className='text-yellow-600' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}