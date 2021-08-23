import { useState } from 'react';

function LoginColorButton() {

  const [ state, setState ] = useState("btn-primary");  // ["btn-primary", ???]

  function changeColor() {

    if(state === "btn-primary") {
      setState("btn-danger");
    } else {
      setState("btn-primary")
    }
  }

  return (
    <button onClick={changeColor}style= { {"margin-right": ".3cm", "borderRadius": "2rem"} } className={"btn " + state}>Login</button>
      )
}

export default LoginColorButton;

//<button type="button" className="btn btn-primary px-4" style= { {"margin-right": ".3cm", "margin-left": "1cm", "borderRadius": "2rem"} }></button>
