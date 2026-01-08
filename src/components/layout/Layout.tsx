import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div style={{
                maxWidth: 800,
                margin: "auto",
                padding: "2rem 1rem",
                minHeight: "80vh"
            }}>

                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;

