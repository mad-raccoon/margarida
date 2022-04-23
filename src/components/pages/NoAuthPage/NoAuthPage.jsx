import { useState } from "react";
import Login from "../../features/Login/Login";
import Register from "../../features/Register/Register";
import Header from "../../shared/Header/Header";
import Menu from "../../shared/Menu/Menu";

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