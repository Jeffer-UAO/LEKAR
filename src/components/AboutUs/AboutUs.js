import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          Bienvenidos a Lekar Automotriz Nos presentamos, Somos una empresa
          comercializadora de arranques, alternadores y sus partes. Para todo
          tipo de vehículos; automóviles, camiones, tractocamiones, montacargas
          y maquinaria agrícola.
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          Ser una empresa especializada en comercializar arranques, alternadores
          y sus partes, ofreciendo las mejores marcas reconocidas en el mercado,
          con un excelente servicio al cliente, productos de alta calidad y
          confiabilidad; nuestros proveedores son aliados estratégicos que dan
          respaldo y garantía.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          Ser la empresa líder en la comercialización de arranques, alternadores
          y sus partes para el año 2024 a nivel nacional, crecer con
          responsabilidad social y vocación al servicio al cliente.
        </p>
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
          <li>(+602) 374 7214</li>
          <li>(+57) 310 400 4309</li>
          <li>(+57) 320 771 3003</li>
          <li>(+57) 312 366 2711</li>
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>Carrera 16 No. 22 – 39 Cali – Valle</p>
      </div>
    </div>
  );
}
