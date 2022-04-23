import { useState } from "react";
import Login from "../../features/Login/Login";
import Register from "../../features/Register/Register";
import Header from "../../shared/Header/Header";

const NoAuthPage =()=> {

const [showLogin, setShowLogin] = useState(true);

const handleToggleClick =()=> {
  setShowLogin(!showLogin)
}

const handleLogin =(value)=> {
  // api call
  // success >> set context user
  // error >> alert("wrong credentials")
}

const handleRegister =()=> {
  // api call
  // success >> aler("success")
  // error >> alert("something wrong happen, try again later")
}

    return <div>
      <Header/>
      {showLogin? <Login onSubmit={handleLogin}/> : <Register/>}
    <button onClick={handleToggleClick}>{showLogin ? "show register" : "show login"}</button>
    </div>
  }

  export default NoAuthPage;