import Image from "next/image";
import styles from "./page.module.scss";
import UserProfile from "./components/UserProfile";
import RepositoryCard from "./components/RepositoryCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <UserProfile isMyProfile />
      <div>
        <Link href="/search-users">
          <button className="btn--green">Encontrar usuários</button>
        </Link>

        <div className={styles["container-projects"]}>
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div>
    </main>
  );
}
