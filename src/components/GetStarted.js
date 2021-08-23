import { useState } from 'react';

function GetStartedColorButton() {

  const [ state, setState ] = useState("btn-primary");  // ["btn-primary", ???]

  function changeColor() {

    if(state === "btn-primary") {
      setState("btn-danger");
    } else {
      setState("btn-primary")
    }
  }

  return (
    <button onClick={changeColor} style={{"text-align": "center", "border-top": "1cm", "borderRadius": "4rem" , "height": "3rem"}} className={"btn " + state}>Get Started</button>
      )
}

export default GetStartedColorButton;

//<button type="button" className="btn btn-primary px-4" style= { {"margin-right": ".3cm", "margin-left": "1cm", "borderRadius": "2rem"} }></button>
