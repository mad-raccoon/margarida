import { useState } from "react";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import NoAuthPage from "./components/pages/NoAuthPage/NoAuthPage";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
    {user? <AuthPage/>: <NoAuthPage/>}
    </div>
  );
}

export default App;
