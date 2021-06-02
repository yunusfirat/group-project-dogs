import React, { useState } from "react";
import "./Dog.css";
import { LikeButton } from "@lyket/react";

function Dog(props) {
  const [vote, setVote] = useState(0);
  const incrementMe = () => setVote(vote + 1);
  return (
    <div className="Dog">
      <img className="Dog-image" src={props.image} alt="display dog" />
      <p>
        <button className="Dog-button" onClick={incrementMe}>
          <LikeButton id="how-to-reduce-footprint" namespace="post" /> {vote}
        </button>
      </p>
    </div>
  );
}

export default Dog;
