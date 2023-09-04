import React from 'react'

import styles from "./FichaTecnica.module.scss"

export function FichaTecnica() {
  return (
    <div className={styles.fichaTecnica}>
        <h1>FICHA TECNICA</h1>
        <div className={styles.especificaciones}>
            <h2>Especificaciones Generales</h2>
            <ul>
                <li><strong>Modelo:</strong> XYZ-1000</li>
                <li><strong>Voltaje de Funcionamiento:</strong> 24V</li>
                <li><strong>Capacidad de Corriente:</strong> 105 Amperios</li>
                <li><strong>Tipo de Montaje:</strong> Base Mesa</li>
                <li><strong>Número de Parte:</strong> 8600232</li>
            </ul>
        </div>
        <div className={styles.caracteristicas}>
            <h2>Características Técnicas</h2>
            <ul>
                <li><strong>Dimensiones:</strong> 180 mm x 140 mm x 80 mm</li>
                <li><strong>Peso:</strong> 5.2 kg</li>
                <li><strong>Tipo de Conexión:</strong> Conexión de Horquilla</li>
                <li><strong>Temperatura de Funcionamiento:</strong> -40°C a 85°C</li>
                <li><strong>Eficiencia:</strong> 92%</li>
                <li><strong>Protección contra Sobrecalentamiento:</strong> Sí</li>
                <li><strong>Protección contra Sobrecarga:</strong> Sí</li>
            </ul>
        </div>
        <div className={styles.compatibilidad}>
            <h2>Compatibilidad</h2>
            <p>Compatible con una amplia gama de vehículos pesados y maquinaria industrial.</p>
        </div>
        <div className={styles.aplicaciones}>
            <h2>Aplicaciones</h2>
            <p>Este alternador es ideal para su uso en camiones, autobuses, maquinaria de construcción y más.</p>
        </div>
        <div className={styles.contenidoPaquete}>
            <h2>Contenido del Paquete</h2>
            <ul>
                <li>1x Alternador Modelo XYZ-1000</li>
                <li>Kit de Montaje y Conexión</li>
                <li>Manual de Usuario</li>
            </ul>
        </div>
        <div className={styles.notas}>
            <h2>Notas Adicionales</h2>
            <ul>
                <li>Fabricado con materiales de alta calidad para una mayor durabilidad y confiabilidad.</li>
                <li>Cumple con las normativas de seguridad y emisiones.</li>
            </ul>
        </div>
        <div className={styles.informacionContacto}>
            <h2>Información de Contacto</h2>
            <p>Fabricante: Empresa Ficticia de Alternadores</p>
            <p>Sitio Web: <a href="http://www.alternadoresficticios.com" target="_blank">www.alternadoresficticios.com</a></p>
            <p>Teléfono de Soporte: 1-800-123-4567</p>
            <p>Correo Electrónico: <a href="mailto:info@alternadoresficticios.com">info@alternadoresficticios.com</a></p>
        </div>
    </div>
  )
}
