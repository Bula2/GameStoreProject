import React from 'react';
import styles from "./header.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {

  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.title}><h3 onClick={() => router.push("/")}><span className={styles.title__start}>Games</span>Novel</h3></div>
        <div className={styles.menu}>
          <ul className={styles.menu__items}>
            <li className={styles.menu__items_item}><Link href={"/"}>Главная</Link></li>
            <li className={styles.menu__items_item}><Link href={"/shop"}>Магазин</Link></li>
            <li className={styles.menu__items_item}><Link href={"/instruction"}>Инструкция</Link></li>
            <li className={styles.menu__items_item}><Link href={"/basket"}>Корзина</Link></li>
            <li className={styles.menu__items_item}><Link href={"/auth"}>Авторизация</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;