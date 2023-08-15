import { useState } from "react";
import './EightBall.css';

const EightBall = ({answers}) => {

  const genRandomIdx = () => Math.floor(Math.random() * answers.length);
  let idx;

  const ask = () => {
    idx = genRandomIdx();
    setMsg(answers[idx].msg);
    setColor(answers[idx].color);
  }

  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  return (
    <div className="EightBall" onClick={ask} style={{backgroundColor: color}}>
        <div className="EightBall-msg">{msg}</div>
    </div>
  )

}

export default EightBall;