import React, {useState} from "react";
import Footer from "./Footer"

function App() {
  const [time, updateTime] = useState(new Date().toLocaleTimeString());
  
  function update(){
    updateTime(new Date().toLocaleTimeString());
  }

  setTimeout(update , 1000);
  const d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  return (
    <div className="container">
      <h1>{time}</h1>
      <h2>Date: {date}/{month+1}/{year}</h2>
      <Footer />
    </div>
  );
}

export default App;
