import React, { useEffect, useState } from "react";
import { Note } from "../notes";
import { v4 as uuidv4 } from "uuid";
import DisplayNotes from "../components/DisplayNotes";

export default function InsertNoteForm() {
  const defaultNote: Note = {
    key: uuidv4(),
    title: "",
    content: "",
  };
  const [notes, setNotes] = useState<Note[]>([]);
  const [note, setNote] = useState<Note>(defaultNote);

  const LOCAL_STORAGE_KEY: string = "notesapp.key";

  useEffect(() => {
    const storedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(storedNotes);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
  }, [notes]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const name = event.target.name
    const value = event.target.value
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function addNote(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote(defaultNote);
  }

  return (
    <main>
      <form className=" text-center m-5">
        <input
          className=" indent-3 p-2 mx-2 rounded-md border-slate-300  border-b-4 focus:outline-yellow-700"
          placeholder="Title.."
          onChange={handleChange}
          name="title"
          value={note.title}
          required
        />
        <input
          className=" indent-3 p-2 mx-2 rounded-md border-slate-300  border-b-4 focus:outline-yellow-700"
          placeholder="Content.."
          onChange={handleChange}
          name="content"
          value={note.content}
          required
        />
        <button
          className=" bg-yellow-700 px-4 py-2 text-white font-semibold rounded-md border-yellow-500 border-b-4 "
          onClick={(e) => {
            addNote(e);
          }}
          type="submit"
        >
          Add Note
        </button>
      </form>
      <DisplayNotes notes={notes} />
    </main>
  );
}
