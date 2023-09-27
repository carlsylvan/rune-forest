import React from "react";
import "./BlankRune.css";

export const BlankRune = () => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder="Rune"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button
        label="Write"
        size="large"
        backgroundColor="antiquewhite"
        color="white"
        type="submit"
      >
        Write
      </Button>
    </form>
  );
};
