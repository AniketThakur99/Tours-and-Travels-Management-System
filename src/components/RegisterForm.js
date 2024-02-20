import React from "react";
import "./RegisterStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/users", data)
      .then(res => {
        alert(res.data.message);
        console.log(res);
        navigate("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Registration</h1>
        </div><br/>

        <div>
          <label className="label">UserName</label>
          <br />
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name"
            {...register("userName", { required: true })}
          />
          <p className="error">{errors.userName?.type === "required" && "UserName is required."}</p>
        </div>

        <div>
          <label className="label">Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <p className="error">
            {errors.email?.type === "required" && "Email is required."}
            {errors.email?.type === "pattern" && "This is not a valid email format!"}
          </p>
        </div>

        <div>
          <label className="label">Mobile Number</label>
          <br />
          <input
            type="number"
            name="mobNumber"
            placeholder="Enter Your Mobile Number"
            {...register("mobNumber", { minLength: 10, maxLength: 10 })}
          />
          <p className="error">
            {errors.mobNumber?.type === "minLength" && "Mobile number should be 10 digits"}
            {errors.mobNumber?.type === "maxLength" && "Mobile number should be 10 digits"}
          </p>
        </div>

        <div>
          <label className="label">Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
<<<<<<< Updated upstream
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              minLength: 8,
              maxLength: 12,
            })}
          ></input>
          <p>
            {errors.password?.type === "required" && "password is required."}
            {errors.password?.type === "pattern" &&
              "Please enter the valid Password!"}
            {errors.password?.type === "minLength" &&
              "Entered number is less than 8 digits"}
            {errors.password?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </p>
          <div>
            <label>Address</label>
            <br />
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              {...register("address")}
            ></input>
          </div>

          <div>
            <label>Date of Birth</label>
            <br />
            <input
              type="date"
              name="dob"
              {...register("dob")}
            ></input>
          </div>

        </div>
        <button className="button" >Register1</button>
        <div>or</div>
=======
            {...register("password", { required: true })}
          />
          <p className="error">{errors.password?.type === "required" && "Password is required."}</p>
        </div>
>>>>>>> Stashed changes

        <div>
          <label className="label">Date of Birth</label>
          <br />
          <input
            type="date"
            name="dob"
            {...register("dob")}
          />
        </div>

<<<<<<< Updated upstream
        <button className="button" onClick={() => navigate("/login")} >Register</button>
=======
        <div>
          <label className="label">Street</label>
          <br />
          <input
            type="text"
            name="street"
            placeholder="Enter Your Street"
            {...register("street")}
          />
        </div>

        <div>
          <label className="label">City</label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="Enter Your City"
            {...register("city")}
          />
        </div>

        <div>
          <label className="label">PinCode</label>
          <br />
          <input
            type="text"
            name="pincode"
            placeholder="Enter Your Pincode"
            {...register("pincode")}
          />
        </div>

        <div>
          <button className="button">Register</button><br />
        </div><br /><br/>
>>>>>>> Stashed changes
      </form>
    </div>
  );
};

<<<<<<< Updated upstream
  )
}

export default RegisterForm
=======
export default RegisterForm;
>>>>>>> Stashed changes
