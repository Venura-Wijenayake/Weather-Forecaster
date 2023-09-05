import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="bg-custom-grey w-3/4 h-1/2 flex flex-col justify-center items-center">
      <h1 className="text-5xl mt-12 mb-4 text-cyan-600 "><bold><u>AuthPage</u></bold></h1>
      <button
        onClick={() => setShowSignUp(!showSignUp)}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
    </main>
  );
}