import Image from "next/image";
import ProfileImage from "../../assets/profile.png";
import styles from "./styles.module.scss";

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <div className={styles["container--avatar"]}>
        <Image src={ProfileImage} alt="avatar" width={249} height={249} />
        <div>Meu Perfil</div>
      </div>

      <h1>David Junior</h1>
      <span>DavidJRRJ</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et nemo
        consequatur illo enim. Facilis ex vitae sint maiores dignissimos! Dolore
        enim quis perferendis eum recusandae voluptates ipsa soluta architecto
        quae.
      </p>

      <div className={styles["items-container"]}>
        <span>@davidjrrj</span>
        <span>Rio de Janeiro</span>
        <span>david.lourenco94@gmail.com</span>
        <span>http://127.0.1</span>
      </div>
    </div>
  );
}
