import React, { useState } from "react";
import "./Dog.css";
import { useGlobalContext } from "./Context";
import { LikeButton } from "@lyket/react";

function Dog(props) {
  const { addVoteToBreed } = useGlobalContext();

  const [vote, setVote] = useState(0);
  const incrementMe = () => {
    setVote(vote + 1);
    const breed = props.image.split("/")[props.image.split("/").length - 2];
    addVoteToBreed(breed);
  };
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
