import React from "react";
import Routes from "./Routes/Routes";

function App() {
  /**
   * ----------------------------------------------------------------
   * State variables 
   * ----------------------------------------------------------------
   */
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  /**
   * ----------------------------------------------------------------
   * Load authenticated user
   * ----------------------------------------------------------------
   */
  const loadUser = () => {
    const token = localStorage.getItem("authtoken");
    if (token) {
      console.log('load user', token);
      setIsAuthenticated(true);
    } else {
      console.log('ohh fuck none was logged in ');
    }

  }
  React.useEffect(() => {
    loadUser();

  }, []);


  return (
    <>
      <Routes isAuthenticated={isAuthenticated} />
    </>
  );



  /**
   * ----------------------------------------------------------------
   * Check react application
   * ----------------------------------------------------------------
   */
  // return (
  //   <div className="App">
  //     <header className="header">This is header</header>
  //     <div className="content">
  //       <h1>HEllo</h1>
  //     </div>
  //     <footer className="footer">This is footer</footer>
  //   </div>
  // );
}

export default App;
