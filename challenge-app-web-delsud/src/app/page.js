import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/layout/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyDetails from "@/components/property/PropertyDetails";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PropertyHeader />
        <PropertyDetails />
      </main>
    </div>
  );
}
