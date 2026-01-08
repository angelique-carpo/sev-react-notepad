type NotePreviewProps = {
    note: string;
    lastSaved: string | null;
};

function NotePreview({ note, lastSaved }: NotePreviewProps) {
    const wordCount = note.trim() === "" ? 0 : note.trim().split(/\s+/).length;
    const charCount = note.length;
    const readingTime = (wordCount / 200).toFixed(2);
    const emptyLines = note .split("\n") .filter(line => line.trim() === "") .length;

    return (
        <div style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "var(--panel-bg)",
            color: "var(--text-color)"
        }}>
            <h3>Πληροφορίες Σημείωσης</h3>

            <p><strong>Λέξεις:</strong> {wordCount}</p>
            <p><strong>Χαρακτήρες:</strong> {charCount}</p>
            <p><strong>Κενές γραμμές:</strong> {emptyLines}</p>
            <p><strong>Χρόνος ανάγνωσης:</strong> ~{readingTime} λεπτά</p>
            <p><strong>Τελευταία αποθήκευση:</strong> {lastSaved || "—"}</p>
        </div>
    );
}

export default NotePreview;

