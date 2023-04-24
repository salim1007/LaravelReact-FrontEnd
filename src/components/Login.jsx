import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event)=>{
    event.preventDefault();
    try{
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      await axios.post('http://localhost:8000/login', {email, password});
      setEmail("");
      setPassword("");
      navigate("/home");
    }catch(e){
      console.log(e);
    }
  }
    return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px] mt-6">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-wite py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                Enter your login details:
              </div>
              <form onSubmit={handleLogin} >
                <div className="mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    className="
                border-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
                "
                  />
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">error</span>
                  </div>

                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    className="
                border-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FFDFE]
                py-3
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
                "
                  />
                   <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">error</span>
                  </div>
              
                  <div className="mb-10">
                    <button
                      type="submit"
                      className="
                w-full
                px-4
                py-3
                bg-indigo-500
                hover:bg-indigo-700
                rounded-md
                text-white
                "
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <Link
                to="/forgot password"
                className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
              >
                Forgot Password?
              </Link>
              <p className="text-base text-[#adadad]">
                Not a member yet?
                <Link to="/register" className="text-primary hover:underline">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
