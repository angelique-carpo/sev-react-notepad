function LocalStoragePreview() {
    const storedNote = localStorage.getItem("note") || "";
    const storedTime = localStorage.getItem("lastSaved") || "—";

    const sizeInBytes = new Blob([storedNote]).size;

    return (
        <div style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "var(--panel-bg)",
            color: "var(--text-color)"
        }}>
            <h3>LocalStorage Preview</h3>

            <p><strong>Αποθηκευμένο κείμενο:</strong></p>
            <pre style={{
                whiteSpace: "pre-wrap",
                background: "rgba(0,0,0,0.05)",
                padding: "0.5rem",
                borderRadius: "4px"
            }}>
                {storedNote || "—"}
            </pre>

            <p><strong>Τελευταία αποθήκευση:</strong> {storedTime}</p>
            <p><strong>Μέγεθος:</strong> {sizeInBytes} bytes</p>
        </div>
    );
}

export default LocalStoragePreview;
