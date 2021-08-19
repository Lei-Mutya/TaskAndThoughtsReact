import { List } from "@material-ui/core";
import React from "react";
import Thought from "./Thought";

function ThoughtList({ thos, removeTho, toggleCompleteTho }) {
  return (
    <List>
      {thos.map(tho => (
        <Thought
          key={tho.id}
          tho={tho}
          removeTho={removeTho}
          toggleCompleteTho={toggleCompleteTho}
        />
      ))}
    </List>
  );
}

export default ThoughtList;