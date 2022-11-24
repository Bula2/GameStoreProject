import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./shop.module.scss";
import Fuse from "fuse.js"
import cx from "classnames"
import Link from "next/link";
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import Game from "../../components/ShopPage/Game/Game";

const ShopPage = () => {
  const gamesList = useSelector((state: RootState) => state.games.data)

  const [games, setData] = useState(gamesList);


  const searchData = (pattern: string) => {
    if (!pattern) {
      setData(gamesList);
      return;
    }

    const fuse = new Fuse(games, {
      keys: ["title"],
    });

    const result = fuse.search(pattern);
    const matches: any[] = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <MainLayout>
      <div className={cx(styles.shop)}>
        <div className={styles.top}>
          <div className={styles.search}>
            <label className={styles.search__label} htmlFor="site-search">Найти:</label>
            <input type="text" className={styles.search__input}
                   onChange={(e) => searchData(e.target.value)}
                   id="site-search" placeholder={"Поиск в магазине"}/>
          </div>
          <div className={styles.link_to_basket}>
            <Link className={styles.link_to_basket__link} href={"/basket"}>
            В корзину
            </Link>
          </div>
        </div>
        <div className={styles.games}>
          {games.map(it =>
            <Game key={it.id} id={it.id}
                  src={it.src} title={it.title}
                  platform={it.platform} price={it.price}
            />
          )}
        </div>

      </div>
    </MainLayout>
  );
};

export default ShopPage;