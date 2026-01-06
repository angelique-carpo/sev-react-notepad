type SaveStatusProps = {
    status: "saved" | "unsaved" | "saving";
};

function SaveStatus({ status }: SaveStatusProps) {
    let message = "";
    let color = "";

    if (status === "saved") {
        message = "Αποθηκεύτηκε";
        color = "green";
    } else if (status === "saving") {
        message = "Αποθήκευση...";
        color = "orange";
    } else if (status === "unsaved") {
        message = "Μη αποθηκευμένο";
        color = "red";
    }

    return (
        <div style={{ marginBottom: "1rem", fontWeight: "bold", color }}>
            {message}
        </div>
    );
}

export default SaveStatus;
