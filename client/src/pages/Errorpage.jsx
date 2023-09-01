import React from "react";
import { useRouteError } from "react-router-dom";

function Errorpage(props) {
  const error = useRouteError();
  console.log(error);
  return (
  <div id="error-page">
    <h1>Errror</h1>
    <p>{error.statusText || error.message}</p>
  </div>
  )
}

export default Errorpage;
