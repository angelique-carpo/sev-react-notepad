import Layout from "./components/layout/Layout";
import NotePad from "./components/notepad/NotePad";
import useDarkMode from "./hooks/useDarkMode";
import Button from "./components/ui/Button.tsx";

function App() {
    const { theme, toggleTheme } = useDarkMode();

    return (
        <Layout>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <Button
                    label={theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
                    onClick={toggleTheme}
                />
            </div>

            <NotePad />
        </Layout>
    );
}

export default App;
