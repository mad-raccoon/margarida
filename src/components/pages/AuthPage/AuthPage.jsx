import { useState } from "react";
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
    const [subpage, setSubpage]  = useState("Home")
    
  const handleMenuClick = (item) => {setSubpage(item)}
    return <div>
        <Header hasLogout />
        <Menu items={getMenuItems(true)} onClick={handleMenuClick}/>
        {displaySubpage(subpage)}
      authenticate page
    </div>
  }

  export default AuthPage;