import React from "react";
import { FaTrash } from "react-icons/fa";

function Note({ id, text, deleteNotes }) {
   return (
      <div className="flex flex-col p-[15px] bg-[#ffffff1a] rounded-xl border-2 min-h-[140px] ">
         <div className="h-[140px] text-white font-bold">{text}</div>
         <div className="flex items-center justify-end h-[20px] w-full">
            <FaTrash
               className="cursor-pointer hover:scale-110 ease-in-out duration-300"
               aria-hidden="true"
               size={20}
               color="white"
               onClick={() => {
                  deleteNotes(id);
               }}
            />
         </div>
      </div>
   );
}

export default Note;
