import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import SaveStatus from "./SaveStatus.tsx";

type NoteEditorProps = {
    note: string;
    setNote: (value: string) => void;
    status: "saved" | "unsaved" | "saving";
};

function NoteEditor({ note, setNote, status }: NoteEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        textareaRef.current?.focus();
    }, []);

    const clearNote = () => {
        setNote("");
        textareaRef.current?.focus();
    };

    const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 40));
    const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 10));

    return (
        <div style={{ marginBottom: "2rem" }}>
            <Button label="Clear Note" onClick={clearNote} />

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <Button label="A+" onClick={increaseFont} />
                <Button label="A-" onClick={decreaseFont} />
            </div>

            <SaveStatus status={status} />

            <textarea
                ref={textareaRef}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Γράψε τις σημειώσεις σου εδώ..."
                rows={10}
                style={{
                    width: "100%",
                    padding: "1rem",
                    fontSize: `${fontSize}px`,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    resize: "vertical",
                }}
            />
        </div>
    );
}

export default NoteEditor;


