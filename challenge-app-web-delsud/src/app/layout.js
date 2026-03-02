import styles from "@/styles/globals.css";
import NavBar from "@/components/layout/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="es">
      
      <body>
        
        <NavBar />
        
        {children}
        
        <Footer />
      
      </body>
    </html>
  
    );
}
