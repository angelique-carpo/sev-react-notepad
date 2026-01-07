import { useEffect, useRef } from "react";

type NoteEditorProps = {
    note: string;
    setNote: (value: string) => void;
};

function NoteEditor({ note, setNote }: NoteEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    const clearNote = () => {
        setNote("");
        if (textareaRef.current)
        { textareaRef.current.focus();
        }
    };

    return (
        <div style={{ marginBottom: "2rem" }}>
            <button
                onClick={clearNote}
                style={{
                    marginBottom: "1rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Clear Note
            </button>

            <textarea
                ref={textareaRef}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Γράψε τις σημειώσεις σου εδώ..."
                rows={10}
                style={{
                    width: "100%",
                    padding: "1rem",
                    fontSize: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    resize: "vertical",
                }}
            />
        </div>
    );
}

export default NoteEditor;

