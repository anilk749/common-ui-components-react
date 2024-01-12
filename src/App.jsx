import { useState } from "react";
import Accordian from "./components/Accordian";

function App() {
  return (
    <>
      <div className="m-20">
        <Accordian title="Accordian 1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque." />
        <Accordian title="Accordian 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque." />
        <Accordian title="Accordian 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae error eaque." />
        
        
      </div>
    </>
  );
}

export default App;
