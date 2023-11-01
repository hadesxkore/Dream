import React from 'react';
import { signInWithGoogle } from './firebase'; // Import your login function

function LoginPage() {
  const handleLogin = () => {
    signInWithGoogle(); // Call your login function here
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In with Google</button>
    </div>
  );
}

export default LoginPage;
