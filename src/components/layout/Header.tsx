function Header() {
    return (
        <header style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            marginBottom: "2rem"
        }}>
            <img src="/notepad-icon.svg" alt="Notepad Logo" style={{ height: "auto" }} />
            <h1 style={{ margin: 0 }}>SEV Project React Notepad</h1>
        </header>
    );
}

export default Header;
