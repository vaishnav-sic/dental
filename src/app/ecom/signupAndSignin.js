'use client'

import { useState } from "react";
import EcomLogin from "../_components/ecomLogin";
import EcomSignup from "../_components/ecomSignup";

const SignupAndSignin = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      

      {login ? <EcomLogin /> : <EcomSignup />}

      <div className="mt-6">
  <button
    className="text-black "
    onClick={() => setLogin(!login)}
  >
    {login ? (
      <>
        
        <span className="w-full bg-white text-black border-2 py-2 px-30 sm:px-40  mt-4 ">SIGN UP</span>
      </>
    ) : (
      <>
        Already have an account?{" "}
        <span className="font-semibold hover:underline">Sign In</span>
      </>
    )}
  </button>
</div>
    </div>
  );
};

export default SignupAndSignin;
