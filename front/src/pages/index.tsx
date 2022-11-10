import MainLayout from "../layouts/MainLayout";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import styles from "./../styles/index.module.scss"
import Image from "next/image";
import BestSellers from "../components/BestSellers/BestSellers";

const Index = () => {
  return (
    <MainLayout>
      <>
        <UnderHeader/>
        <div className={styles.photo_block}>
          <div className={styles.photo_block__left}>
            <p>Приобретайте игры на любимые консоли без проблем и переплат</p>
          </div>
          <div className={styles.photo_block__center}>
            <Image width={580} height={360} src={"/img/ps.png"}/>
          </div>
          <div className={styles.photo_block__right}>
            <p>
              Игры на PS4/PS5. PS.PLus Essential/Extra/Deluxe. Аккаунты.
              <br/>
              Честные цены. Быстрый доступ. Минимальные усилия.
            </p>
          </div>
        </div>
        <BestSellers/>
      </>
    </MainLayout>
  )
}

export default Index;
