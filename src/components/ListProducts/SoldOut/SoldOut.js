import React from "react";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "@/components/WhatsApp";
import Link from "next/link";

import { CardImg, CardSubtitle, CardTitle, Button } from "reactstrap";

import styles from "./SoldOut.module.scss";



export function SoldOut(props) {
  const { product } = props;

  const format = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Cambia 'es-ES' por tu configuración regional
  };

  return (
    <div className={styles.list__product}>
     
        <div className={styles.soldout}>
          <span>AGOTADO</span>
        </div>
        <CardImg
          alt="Card image cap"
          src={product.productData.image_alterna}
        />
     

      <h5>{product.productData.name_extend}</h5>
      <div className={styles.product}>
        <div className={styles.price}>
          {product.productData.price1 > 0 && (
            <h6>$ {format(product.productData.price2)}</h6>
          )}
          {product.productData.price2 > 0 && (
            <h6>Por Mayor $ {format(product.productData.price1)}</h6>
          )}
        </div>

        
      </div>

     
    </div>
  );
}
