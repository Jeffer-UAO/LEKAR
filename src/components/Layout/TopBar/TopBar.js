import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

export function TopBar() {
  return (
    <div className={styles.topBarComponent}>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.webp" alt="Lekar" />{" "}
        </Link>       
      </div>     
    </div>
  );
}
