import { ReactNode } from "react";
import "./Runestone.css";

interface RunestoneProps {
  children: ReactNode;
  key: number;
}

export const Runestone = (props: RunestoneProps) => {
  return <div>{props.children}</div>;
};
