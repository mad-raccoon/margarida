import { useState } from "react";
import { useSelector } from "react-redux";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import NoAuthPage from "./components/pages/NoAuthPage/NoAuthPage";


const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
    {user.isAuthenticated? <AuthPage/>: <NoAuthPage/>}
    </div>
  );
}

export default App;
