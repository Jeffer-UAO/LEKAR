import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>LEKAR AUTOMOTRIZ</h1>
        <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
        <li>(+57) 312 366 2711</li>
          <li>(+57) 320 771 3003</li>
          <li>(+602) 386 4642</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 16 No. 22 – 39 Cali – Valle</p>
      </div>
      </div>
      <FooterApp />
    </>
  );
}
