import { ReactNode } from "react";
import "./RuneStone.css";

export const RuneStone = (props) => {
  return <div className="runestone">{props.children}</div>;
};
