'use client'
import { useState } from "react";
import EcomLogin from "../_components/ecomLogin";
import EcomSignup from "../_components/ecomSignup";


const Ecom=()=>{
    const [login,setLogin]=useState(true)
    return(
        <>
        <div className=" items-center px-5 justify-center flex flex-col w-full ">
        <h1 className="text-4xl font-bold pt-4">Ecom Login/Signup Page</h1>
        {
            login? <EcomLogin></EcomLogin> : <EcomSignup></EcomSignup>
        }
        
        
        <div className=" items-center justify-center text-center flex">
        <button className="border-1 bg-blue-300 rounded-4xl p-2" onClick={()=>setLogin(!login)}>
            {login? "Do not have Account? SignUp" : "Already have Account? Login"}
        </button>
        </div>
        </div>
        </>
    )
}

export default Ecom;