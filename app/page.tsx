import Image from "next/image";
import styles from "./page.module.scss";
import UserProfile from "./components/UserProfile";
import RepositoryCard from "./components/RepositoryCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <RepositoryCard />
      <UserProfile />
    </main>
  );
}
