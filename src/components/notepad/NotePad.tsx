import { useState, useEffect } from "react";
import NoteEditor from "./NoteEditor";
import SaveStatus from "./SaveStatus";
import NotePreview from "./NotePreview";

function NotePad() {
    const [note, setNote] = useState("");
    const [status, setStatus] = useState<"saved" | "unsaved" | "saving">("saved");
    const [lastSaved, setLastSaved] = useState<string | null>(null);

    // Load saved note on mount
    useEffect(() => {
        const savedNote = localStorage.getItem("note");
        const savedTime = localStorage.getItem("lastSaved");

        if (savedNote) {
            setNote(savedNote);
        }
        if (savedTime) {
            setLastSaved(savedTime);
        }
    }, []);

    // Auto-save effect
    useEffect(() => {
        // If the note is empty, don't save
        if (note === "") {
            setStatus("unsaved");
            return;
        }

        setStatus("saving");

        const timeout = setTimeout(() => {
            localStorage.setItem("note", note);

            const time = new Date().toLocaleTimeString();
            localStorage.setItem("lastSaved", time);

            setLastSaved(time);
            setStatus("saved");
        }, 1000); // save after 1 second of inactivity

        return () => clearTimeout(timeout);
    }, [note]);

    return (
        <div>
            <SaveStatus status={status} />
            <NoteEditor note={note} setNote={setNote} />
            <NotePreview note={note} lastSaved={lastSaved} />
        </div>
    );
}

export default NotePad;
