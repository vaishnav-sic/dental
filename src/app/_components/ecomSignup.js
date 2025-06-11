const EcomSignup=()=>{
    return(
        <>
        <h1 className="text-2xl p-5">Signup</h1>
        <div>
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="text" placeholder="Enter Email id" />
            </div>
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="password" placeholder="Enter password" />
            </div >
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="password" placeholder="Confirm password" />
            </div >
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="password" placeholder="Enter Contact Number" />
            </div >
            <div className="input-wrapper">
            <button className="border-2 bg-red-400 button">SignUp</button>
            </div>
        </div>
        </>
    )
}

export default EcomSignup;