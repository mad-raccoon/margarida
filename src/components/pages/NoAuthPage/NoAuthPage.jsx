import { useState } from "react";
import { authApi } from "../../../api/authApi";
import Login from "../../features/Login/Login";
import Register from "../../features/Register/Register";
import Header from "../../shared/Header/Header";
import Menu from "../../shared/Menu/Menu";

const NoAuthPage =()=> {

const [showLogin, setShowLogin] = useState(true);

const handleToggleClick =()=> {
  setShowLogin(!showLogin)
}

const handleLogin =async(value)=> {
  const res = await authApi.authenticate("margarida", "test");
  console.log(res.user);
  // set redux
}

const handleRegister =(value)=> {
  // api call
  // success >> aler("success")
  // error >> alert("something wrong happen, try again later")
  //console.log(value)
}

    return <div>
      <Header/>
      <Menu/>
      {showLogin? <Login onSubmit={handleLogin}/> : <Register onSubmit={handleRegister}/>}
    <button onClick={handleToggleClick}>{showLogin ? "show register" : "show login"}</button>
    </div>
  }

  export default NoAuthPage;