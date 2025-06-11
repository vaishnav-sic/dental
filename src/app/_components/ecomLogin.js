const EcomLogin=()=>{
    return(
        <>
        <h1 className="text-2xl p-5 ">Login Component</h1>
        <div>
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="text" placeholder="Enter Email id" />
            </div>
            <div className="input-wrapper">
                <input className="border-2 bg-stone-300 input-field" type="password" placeholder="Enter password" />
            </div >
            <div className="input-wrapper">
            <button className="border-2 bg-green-400 button">Login</button>
            </div>
        </div>
        </>
    )
}

export default EcomLogin;