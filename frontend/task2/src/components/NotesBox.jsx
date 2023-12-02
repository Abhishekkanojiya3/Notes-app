import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const NotesBox = (props) => {
  const deleteHandler = () => {
    props.deleteItem(props.id);
  
  };
  return (
    <div className="notes_Box">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={deleteHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
};