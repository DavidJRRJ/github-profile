import Image from "next/image";
import styles from "./page.module.scss";
import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserProfile />
    </main>
  );
}
