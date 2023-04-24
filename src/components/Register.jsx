import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../api/axios";

const Register = () => {

const navigate= useNavigate();

  const [name, setName]=useState("");
  // const [midname, setMidname]=useState("");
  // const [surname, setSurname] = useState("");
  const [email, setEmail]=useState("");
  // const [regno, setRegno]=useState("");
  const [password, setPassword]=useState("");
  // const [year, setYear]=useState("");
  const [password_confirmation,setPasswordConfirmation]=useState("");

  const handleRegister = async(event)=>{
    event.preventDefault();
    try{
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      await axios.post("http://localhost:8000/register", {name,email, password,password_confirmation});
      setName("");
      // setMidname("");
      // setSurname("");
      setEmail("");
      // setRegno("");
      setPassword("");
      // setYear("");
      setPasswordConfirmation("");
      navigate("/home");
    }
    catch(e){
      console.log(e);
    }
  }
  
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px] ">
    <div className="container mx-auto">
      <div className="mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-wite py-16 px-10 text-center sm:px-12 md:px-[60px]">
            <div className="mb-10 text-center md:mb-16">Fill the form below to register:</div>
            <form onSubmit={handleRegister}>
              <div className="mb-6">
                <input 
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(e)=>setPasswordConfirmation(e.target.value)}
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
                <span className="text-red-400 text-sm m-2 p-2"></span>
              </div>
              <div className='mb-10'>
                <button 
                type='submit'
                className='
                w-full
                px-4
                py-3
                bg-indigo-500
                hover:bg-indigo-700
                rounded-md
                text-white
                '
                >
                  Register
                </button>
              </div>
                

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


export default Register