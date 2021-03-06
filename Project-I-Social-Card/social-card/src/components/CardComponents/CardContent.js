import React from "react";
import "./Card.css";

function CardContent() {
  return (
    <div class="CardContent">
      <h3 className="cardtitle">Get started with React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="sublink">reactjs.org</p>
    </div>
  );
}

export default CardContent;
