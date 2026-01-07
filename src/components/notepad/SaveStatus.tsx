type SaveStatusProps = {
    status: "saved" | "unsaved" | "saving";
};

function SaveStatus({ status }: SaveStatusProps) {
    const statusMap = {
        saved: { message: "Αποθηκεύτηκε", color: "green" },
        saving: { message: "Αποθήκευση...", color: "orange" },
        unsaved: { message: "Μη αποθηκευμένο", color: "red" },
    };

    const { message, color } = statusMap[status];

    return (
        <div style={{
            marginBottom: "1rem",
            fontWeight: "bold",
            color }}>
            {message}
        </div>
    );
}

export default SaveStatus;

