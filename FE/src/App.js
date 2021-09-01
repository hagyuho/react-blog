import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [host, setHost] = useState("");

  useEffect(() => {
    getHost();
  }, []);

  const getHost = async () => {
    try {
      let res = await axios.get("/api/host");
      setHost(res.data.host);
      debugger;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>
        {" "}
        welcome to <u> {host}</u> Blog!
      </h3>
    </div>
  );
}

export default App;
