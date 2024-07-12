import React, { useState } from "react";
import "./LoginStyle.css";
import { useLogin } from "../../Hooks/useLogin";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const{ login,error}=useLogin()

const handleSubmit = async(e)=>{
e.preventDefault();

await login(email,password);
setEmail("");
setPassword("");
}

  return (
    <div className="main-form">
      <form  onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="field">
          <label htmlFor=""> Email :</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="field">
          <label htmlFor="">Password :</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
