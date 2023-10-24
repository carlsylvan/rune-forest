import WriteRuneButton from "./WriteRuneButton";
import { options } from "./constants";

export default {
  title: "WriteRuneButton",
  component: WriteRuneButton,
  parameters: {
    layout: "centered",
  },
};

export const Default = () => (
  <WriteRuneButton color="white" size="md" label="Exempel" />
);

export const Sizes = () =>
  options.sizes.map((size, index) => (
    <WriteRuneButton key={index} size={size} label="Exempel" />
  ));

export const Colors = () =>
  options.colors.map((color, index) => (
    <WriteRuneButton key={index} color={color} size="md" label="Exempel" />
  ));
