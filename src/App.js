import { useState } from "react";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import NoAuthPage from "./components/pages/NoAuthPage/NoAuthPage";
import Menu from "./components/shared/Menu/Menu";


const App = () => {
  const [user, setUser] = useState(true);

  return (
    <div>
    {user? <AuthPage/>: <NoAuthPage/>}
    </div>
  );
}

export default App;
