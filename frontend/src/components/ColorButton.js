import { useState } from 'react';

function ColorButton() {

  const [ state, setState ] = useState("btn-primary");  // ["btn-primary", ???]

  function changeColor() {

    if(state === "btn-primary") {
      setState("btn-danger");
    } else {
      setState("btn-primary")
    }
  }

  return (
    <button onClick={changeColor} className={"btn " + state}>props.children</button>
   
  )
}

export default ColorButton;