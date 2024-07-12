import React from "react";
import "../Login/LoginStyle.css";
import { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    // console.log(email, password);
  };

  return (
    <>
      <div className="main-form">
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
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
    </>
  );
};

export default Signup;


// import React, { useState } from "react";
// import { useSignup } from "../../Hooks/useSignup";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signup, error } = useSignup();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//       signup(email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Sign Up</h3>
//       <label>Email:</label>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />
//       <label>Password:</label>
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <button type="submit">Sign Up</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default Signup;
