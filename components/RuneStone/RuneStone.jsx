import { ReactNode } from "react";
import "./RuneStone.css";

export default function RuneStone(props) {
  return <div className="runestone">{props.children}</div>;
}
