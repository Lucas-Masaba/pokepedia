import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useLoginUserMutation } from '../redux/login/login'
import { setToken } from "../redux/login/authSlice";

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const navigate = useNavigate()

  const [formValue, setFormValue] = useState(initialState)

  const [loginUser, {data, isSuccess, isLoading, isError}] = useLoginUserMutation()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const { email, password } = formValue

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({email, password})
    } else {
      console.log(false)
    }
  }

  useEffect(() => {
    if(isSuccess) {
      console.log('success')
      dispatch(setToken({token: data.token}))
      navigate("/")
    }
  }, [isSuccess])

  return (
    <div>
      <form
       onSubmit={handleLogin}
      >
        <h2>Login</h2>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValue.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formValue.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>

        <button
          type="submit"
          className="self-end px-3 py-2 leading-tight border rounded appearance-none focus:shadow-outline bg-lime-400 text-slate-50 hover:bg-lime-500 focus:outline-none"
        >
          Login
        </button>
        <p className="pt-6 text-center text-gray-800">
          Don't have an account?&nbsp;
          <NavLink to="/sign-up" className="self-end px-3 py-2 leading-tight bg-blue-400 border rounded appearance-none focus:shadow-outline text-slate-50 hover:bg-blue-500 focus:outline-none">
            Sign up 
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
