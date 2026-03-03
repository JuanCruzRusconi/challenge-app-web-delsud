import NavBar from "@/components/layout/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import styles from "./layout.module.css";

const plusJakartaFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-primary",
    weight: ["200","300","400","500","600","700"]
});

export default function RootLayout({ children }) {
  
    return (
        
        <html lang="es" className={plusJakartaFont.variable}>
        
            <body className={styles.layout_container}>
            
                <NavBar />
                
                <main className={styles.main_content}>
                    {children}
                </main>
                
                <Footer />
        
            </body>
        </html>
    
        );
}
