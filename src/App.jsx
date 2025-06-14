/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react';


function App() {
 const [name, setName] = useState("Sofia");

    const changeName = (newName) => {
        if (newName != "" && newName != null && newName != undefined && newName != name) {
            setName(newName);
        }
    }

 return (
    <>
      <h1>Teacher Name: {name}</h1>
      <div className="container">
      <h3>Change Teacher Name (with Click)</h3>
      <ul>
        <li onClick = {() => setName("Data")}>Data</li>
        <li onClick = {() => setName("Reyes")}>Reyes</li>
        <li onClick = {() => setName("Yolanda")}>Yolanda</li>
      </ul>
      </div>
      <div className="container">
        <h3>Change Teacher Name (with Form): </h3>
        <input type="text" placeholder="Enter new name" onKeyDown={(e) => {
          if (e.key === "Enter") {
            changeName(e.target.value);
            e.target.value = "";
          }
        }}></input>
        <p>Write the name and press enter to update name!</p>
      </div>
    </>
    )

}

export default App;
