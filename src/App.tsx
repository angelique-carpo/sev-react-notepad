import Layout from "./components/layout/Layout";
import NotePad from "./components/notepad/NotePad";
import useDarkMode from "./hooks/useDarkMode";

function App() {
    const { theme, toggleTheme } = useDarkMode();

    return (
        <Layout>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
                    {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
                </button>
            </div>

            <NotePad />
        </Layout>
    );
}

export default App;
