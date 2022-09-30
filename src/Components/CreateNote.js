import React from "react";

function CreateNote({ textHandler, saveHandler, inputText }) {
   const maxChar = 100;
   const charLeft = maxChar - inputText.length;
   return (
      <div className="flex flex-col w-[300px] text-white font-bold bg-[#ffffff1a] rounded-xl border-2">
         <textarea
            onChange={textHandler}
            value={inputText}
            cols={10}
            rows={5}
            placeholder="type something"
            maxLength={100}
            className="placeholder:italic font-medium max-h-[150px] p-5 border-none resize-none bg-transparent"
         />
         <div className="flex justify-between mx-10 my-1">
            <span>{charLeft} left</span>
            <button
               className="hover:scale-105 ease-in-out duration-300"
               onClick={saveHandler}
            >
               Save
            </button>
         </div>
      </div>
   );
}

export default CreateNote;
