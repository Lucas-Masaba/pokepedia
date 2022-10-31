import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignUpUserMutation } from "../redux/signup/signup";

const SignUp = () => {
  const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
  }
  const [formValue, setFormValue] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);

  const [signUpUser, {data, isSuccess, isLoading}] = useSignUpUserMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const { name, username, email, password } = formValue

  const handleSignUp = async() => {
    if(name && username && email && password) {
      await signUpUser({name, username, email, password})
    } else {
      console.log(false)
    }
  }

  useEffect(() => {
    if(isSuccess) {
      navigate('/login')
    }
  }, [isSuccess])

  return (
    <div>
      <h1>Sign-Up page</h1>
      <form onSubmit={handleSignUp}>
        <div >
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formValue.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div >
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={formValue.username}
            onChange={handleChange}
            placeholder="Enter a username"
            required
          />
        </div>

        <div >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div >
          <label htmlFor="name">Password</label>
          <input
            name="password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formValue.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div >
          <label className="text-sm" htmlFor="show-password">
            Show password?
          </label>
          <input
            type="checkbox"
            name="show-password"
            id="show-password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          className="flex items-center self-end rounded-md bg-lime-400 py-1 px-2 font-bold text-slate-50 hover:bg-lime-500 "
          type="submit"
        >Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
