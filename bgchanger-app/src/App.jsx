
import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  // function changeColor(newColor) {
  //   document.body.style.backgroundColor=newColor;
  //   setColor(newColor);
  // }

  return (
    <>
      <button type="button" id='red-btn' onClick={()=>{setColor("red")}}>Red</button>
      <button type="button" id='pink-btn' onClick={()=>{setColor("pink")}}>Pink</button>
      <button type="button" id='blue-btn' onClick={()=>{setColor("aliceblue")}}>Blue</button>
      <button type="button" id='green-btn' onClick={()=>{setColor("limegreen")}}>Green</button>
    </>
  )
}

export default App
