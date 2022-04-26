import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/userSlice";
import Projects from "../../features/Projects/Projects";
import News from "../../features/News/News";
import AboutUs from "../../features/AboutUs/AboutUs";
import Header from "../../shared/Header/Header";
import Home from "../../shared/Home/Home";
import Menu from "../../shared/Menu/Menu";
import EditProfile from "../../features/EditProfile/EditProfile";

const menuItems = ["Home", "Projects", "News","About Us", "Edit Profile", "Edit Projects", "Edit News"]
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
    case 'News':
      return <News/>;  
    case 'About Us':
      return <AboutUs/>; 
    case 'Edit Profile':
      return <EditProfile/>;
      
  
    default: return <Home/>
  }
}

const AuthPage =()=> {

  const user = useSelector((state) => state.user);
console.log(
  user.role

); 

const dispatch = useDispatch();
    const [subpage, setSubpage]  = useState("Home")
    
  const handleMenuClick = (item) => {setSubpage(item)}
   
  const handleLogout =()=> {
    dispatch(logout())
  } 

   return <div>
        <Header hasLogout onLogout={handleLogout}/>
        <Menu items={getMenuItems(user.role === "admin")} onClick={handleMenuClick}/>
        {displaySubpage(subpage)}
    </div>
  }

  export default AuthPage;