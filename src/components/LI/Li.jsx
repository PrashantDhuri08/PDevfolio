import React from "react";
import "./Li.css";

function Li(props) {
  return (
    <div>
     <a href={props.link}><button class="btn">{props.content}</button></a>

    </div>
  );
}

export default Li;
