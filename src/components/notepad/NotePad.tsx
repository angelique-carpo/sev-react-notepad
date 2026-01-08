import { useState, useEffect } from "react";
import NoteEditor from "./NoteEditor.tsx";
import NotePreview from "./NotePreview.tsx";
import LocalStoragePreview from "./LocalStoragePreview.tsx";


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

    useEffect(() => {
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
        }, 1000);

        return () => clearTimeout(timeout);
    }, [note]);

    return (
        <div>
            <NoteEditor
                note={note}
                setNote={setNote}
                status={status}
            />

            <NotePreview
                note={note}
                lastSaved={lastSaved}
            />

            <LocalStoragePreview/>
        </div>
    );
}

export default NotePad;

