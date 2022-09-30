import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Notes = () => {
   const [notes, setNotes] = useState([]);
   const [inputText, setInputText] = useState("");

   const textHandler = (e) => {
      setInputText(e.target.value);
   };

   //Saves text and creates id for new note in an array.
   const saveHandler = () => {
      setNotes((prevState) => [
         ...prevState,
         {
            id: uuid(),
            text: inputText,
         },
      ]);

      //clears text area.
      setInputText("");
   };

   //deletes created notes
   const deleteNotes = (id) => {
      const removingNotes = notes.filter((note) => note.id !== id);

      setNotes(removingNotes);
   };

   //Both functions store the notes created and saves them on the website storage
   useEffect(() => {
      const data = JSON.parse(localStorage.getItem("Notes"));
      if (data) {
         setNotes(data);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("Notes", JSON.stringify(notes));
   }, [notes]);

   return (
      <div className="grid grid-cols-3 mx-auto gap-[1rem] max-w-[1200px]">
         {notes.map((note) => (
            <Note
               key={note.id}
               id={note.id}
               text={note.text}
               deleteNotes={deleteNotes}
            />
         ))}
         <CreateNote
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}
         />
      </div>
   );
};

export default Notes;
