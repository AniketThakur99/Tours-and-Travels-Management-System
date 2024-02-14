import React from "react"
import "./RegisterStyles.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const navigate = useNavigate()



  const onSubmit = (data) => {

    console.log(data);
    axios.post("http://localhost:8087/studentrestapi/api/register", data)
      .then(res => {
        alert(res.data.message)
        console.log(res);
        navigate("/login")
      })
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>

        </div>
        <div>
          <h1>Registration</h1>
        </div>

        <div>
          <label> UserName</label>
          <br />
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name"
            {...register("userName", { required: true })}
          ></input>
          <p>
            {errors.userName?.type === "required" && "userName is required."}
          </p>
        </div>

        <div>
          <label>Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          ></input>
          <p>
            {errors.email?.type === "required" && "email is required."}
            {errors.email?.type === "pattern" &&
              "This is not a valid email format!"}
          </p>
        </div>

        <div>
          <label>Mobile Number</label>
          <br />
          <input
            type="number"
            name="mobNumber"
            placeholder="Enter Your Mobile Number"
            {...register("mobNumber", { minLength: 10, maxLength: 10 })}
          ></input>
        </div>
        <p>
          {errors.mobNumber?.type === "minLength" &&
            "mobile no. is not less than 10 digits"}
          {errors.mobNumber?.type === "maxLength" &&
            "mobile no. is not more than 10 digits"}
        </p>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: true,
              pattern: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,15}$/,
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
            <label>Street</label>
            <br />
            <input
              type="text"
              name="street"
              placeholder="Enter Your Address"
              {...register("street")}
            ></input>
          </div>

          <div>
            <label>City</label>
            <br />
            <input
              type="text"
              name="city"
              placeholder="Enter Your Address"
              {...register("city")}
            ></input>
          </div>

          <div>
            <label>PinCode</label>
            <br />
            <input
              type="text"
              name="pincode"
              placeholder="Enter Your Address"
              {...register("pincode")}
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
        <button className="button" >Register</button>


      </form>
    </div>

  )
}

export default RegisterForm