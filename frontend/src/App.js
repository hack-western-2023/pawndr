import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
//import Login from "./components/login";
import CreateAccount from "./components/createaccount";
//import Home from "./components/home";

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
    <div className="App">
      <Home />
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p></p>}
    </div>
  );
}

export default App;
