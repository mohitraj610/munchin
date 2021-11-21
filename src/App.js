import React, {useState, useEffect} from "react";
import MainPage from "./MainPage";
import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','0');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && <div><MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <Login onLogin={loginHandler} /></div>}
        {isLoggedIn && <MainPage onLogout={logoutHandler}/>}
      </main>
    </React.Fragment>
  );
}

export default App;
