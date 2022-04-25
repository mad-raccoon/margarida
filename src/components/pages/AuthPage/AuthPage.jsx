import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/userSlice";
import Projects from "../../features/Projects/Projects";
import Header from "../../shared/Header/Header";
import Home from "../../shared/Home/Home";
import Menu from "../../shared/Menu/Menu";

const menuItems = ["Home", "Projects", "News", "Edit Profile", "Edit Projects", "Edit News"]
const menuItemsAdmin = ["Dasboard", "Manage Users"]

const getMenuItems = (isAdmin) => {
  if (isAdmin){
    return [...menuItems,...menuItemsAdmin]
  } 
  return menuItems
}

const displaySubpage = (value) => {
  switch (value) {
    case 'Projects':
        return <Projects/>
      
  
    default: return <Home/>
  }
}

const AuthPage =()=> {
  const dispatch = useDispatch();
    const [subpage, setSubpage]  = useState("Home")
    
  const handleMenuClick = (item) => {setSubpage(item)}
   
  const handleLogout =()=> {
    dispatch(logout())
  } 

   return <div>
        <Header hasLogout onLogout={handleLogout}/>
        <Menu items={getMenuItems(true)} onClick={handleMenuClick}/>
        {displaySubpage(subpage)}
    </div>
  }

  export default AuthPage;