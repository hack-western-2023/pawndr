import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import loginpage from "./assets/loginpage.png";
import Login from "./components/login";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.BACKEND_ENDPOINT);
      setData(response.data);
      //CG generated
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" style={{ 
      backgroundImage: `url(${loginpage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      backgroundAttachment: 'fixed',
      overflow: 'hidden'
    }}>
      <Login />
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p></p>}
    </div>
  );
}

export default App;
