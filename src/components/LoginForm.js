// import "./ContactFormStyles.css"

// function LoginForm(){
//     return(
//         <div className="form-container">
//             <form>
//                 <input placeholder="Email"/>
//                 <input placeholder="Password"/>
//                 <button>Login</button>               
//             </form>
//         </div>
//     )
// }

// export default LoginForm

// import React from "react"
// import "./LoginFormStyles.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form";

// const LoginForm = ( {setLoginUser}) => {
//     const { register, handleSubmit,formState: { errors },} = useForm();

//     const navigate = useNavigate()



//    const onSubmit = (data) => {

//    // console.log(data);
//     axios.post("http://localhost:3010/login", data)
//     .then( res => {
//         alert(res.data.message)
//         //console.log(res.data.user);
//         setLoginUser(res.data.user)

//         navigate("/user")
//     })
//   }

//     return (
//         <div className="login">
//             <form onSubmit={handleSubmit(onSubmit)}>
//              <div>
//                 <h2>Login</h2>
//              </div>

//         <div>
//           <label>Email Address</label>
//           <br />
//           <input
//             type="text"
//             name="email"
//             autoComplete="off"
//             placeholder="Enter Your Email"
//             {...register("email", {required: true,})}
//            ></input>
//           <p>
//             {errors.email?.type === "required" && "email is required."}
//           </p>
//         </div>

//         <div>
//           <label>Password</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Your Password"
//             {...register("password", {
//               required: true,
//             })}
//           ></input>
//           <p>
//             {errors.password?.type === "required" && "password is required."}
//           </p>
//         </div>
//             <button className="button" >Login</button>
//             <div>or</div>
//             <button className="button" onClick={() => navigate("/register")} >Register</button> 
//             </form>
//         </div>

//     )
// }

// export default LoginForm



// LoginForm.js

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginFormStyles.css"; // Import the CSS file

const LoginForm = ({ setLoginUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:8087/studentrestapi/api/login", data)
      .then(res => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/user");
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login</h1>
        </div>

        <div>
          <label>Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          <p>
            {errors.email?.type === "required" && "Email is required."}
          </p>
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
          />
          <p>
            {errors.password?.type === "required" && "Password is required."}
          </p>
        </div>
        <button className="button">Login</button>
        <div>or</div>
        <button className="button" onClick={() => navigate("/register")}>Register</button>
      </form>
    </div>
  );
};

export default LoginForm;
