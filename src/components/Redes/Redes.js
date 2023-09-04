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
        <h3 className={styles.phone}>386 4642</h3>

        <div className={styles.redes}>
          <p> <IoLogoWhatsapp color="green"/> Cel: 320 771 3003</p>
          <p>lekarventas@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
