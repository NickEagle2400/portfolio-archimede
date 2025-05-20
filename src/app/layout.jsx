import "./globals.css";

export const metadata = {
    title: "Progetto Portfolio - IS Archimede",
    description: "Portoflio con DatoCMS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="it">
            <body>
                {children}
            </body>
        </html>
    );
}
