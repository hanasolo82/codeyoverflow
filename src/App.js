import React from "react";
import {comments} from './commentData';
import Cards from "./Cards";


function App() {
  return (
    <div>
        {comments.map(comment =>
        <Cards commentObject = {comment}/>
        )} 
    </div>
  );   
};

export default App;