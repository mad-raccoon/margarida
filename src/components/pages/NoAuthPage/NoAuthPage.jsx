import { useState } from "react";
import { useDispatch } from "react-redux";
import { authApi } from "../../../api/authApi";
import { login } from "../../../store/userSlice";
import Login from "../../features/Login/Login";
import Projects from "../../features/Projects/Projects";
import Register from "../../features/Register/Register";
import Header from "../../shared/Header/Header";
import Menu from "../../shared/Menu/Menu";

const menuItems = ["Login", "Register", "News", "Projects", "About us"]


const NoAuthPage =()=> {
  const dispatch = useDispatch()
const [showLogin, setShowLogin] = useState(true);
const [subpage, setSubpage]  = useState("Login")

const handleMenuClick = (item) => {setSubpage(item)}


const handleLogin =async(value)=> {
  const res = await authApi.authenticate(value.username, value.password);
  dispatch(login(res.user))
}

const handleRegister =(value)=> {
  // api call
  // success >> aler("success")
  // error >> alert("something wrong happen, try again later")
  //console.log(value)
}

const displaySubpage = (value) => {
  switch (value) {

    case "Register": 
      return <Register onSubmit={handleRegister}/>;
    case 'Projects':
      return <Projects/>;
      
  
    default: return   <Login onSubmit={handleLogin}/>
  }
}

    return <div>
      <Header/>
      <Menu items={menuItems} onClick={handleMenuClick}/>
      {displaySubpage(subpage)}
    </div>
  }

  export default NoAuthPage;