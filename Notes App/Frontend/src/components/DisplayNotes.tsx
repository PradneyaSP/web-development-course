// import React, { useState } from "react";
import { Note } from "../notes";

interface NoteProps {
  notes: Note[];
}

export default function Notes({ notes }: NoteProps) {
  const currentNotes = notes.map((note) => {
    return (
      <li key={note.key} className=" w-56 bg-white rounded shadow-sm p-4 mt-3">
        <div>
          <h2 className="text-center font-bold pb-1">{note.title}</h2>
          <hr />
          <p className=" pt-1">{note.content}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      <div className=" m-3">
        <ul className="flex gap-4 flex-wrap">{currentNotes}</ul>
      </div>
    </>
  );
}
