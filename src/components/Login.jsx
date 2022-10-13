import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLoginUserMutation } from '../redux/login/login'

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const navigate = useNavigate()

  const [formValue, setFormValue] = useState(initialState)

  const [loginUser, {data, isSuccess, isLoading}] = useLoginUserMutation()

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const { email, password } = formValue

  console.log(email)

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
          className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight bg-lime-400 text-slate-50 hover:bg-lime-500 focus:outline-none self-end"
        >
          Login
        </button>
        <p className="text-center text-gray-800 pt-6">
          Don't have an account?&nbsp;
          <NavLink to="/sign-up" className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight bg-blue-400 text-slate-50 hover:bg-blue-500 focus:outline-none self-end">
            Sign up 
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
