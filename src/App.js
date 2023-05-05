import React from "react";

function List() {
  const names = ["Michael Jackson", "The Weeknd", "Shakira", "Britney Spears"];

  const items = names.map((name) =>
    React.createElement("li", { key: name }, name)
  );

  return <ul>{items}</ul>;
}

export default List;
