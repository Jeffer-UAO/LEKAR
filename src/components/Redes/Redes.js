import React from "react";
import styles from "./Redes.module.scss";
import { CardImg } from "reactstrap";

import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export function Redes() {
  return (
    <div className={styles.space}>
      <div className={styles.publicity}>
        <div className={styles.imagenContent}>
          <CardImg src="/image/alternador.webp" alt="Lekar" />
          <CardImg src="/image/arranque.webp" alt="Lekar" />
        </div>

        <p>
          ALTERNADORES, ARRANQUES Y SUS PARTES PARA TODO TIPO DE MAQUINARIA
          PESADA Y LIVIANA
        </p>
      </div>

      <div className={styles.contact}>
        <h5 className={styles.phone}>(602) 374 7214</h5>

        <div className={styles.redes}>
          <p> Cel: 320 771 3003</p>
          <p>lekarventas@gmail.com</p>
          <p>Cra. 16 No. 22-39 CALI</p>
        </div>
      </div>
    </div>
  );
}
