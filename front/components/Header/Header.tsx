import React from 'react';
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.title}><h3><span className={styles.title__start}>Game</span>Store</h3></div>
        <div className={styles.menu}>
          <ul className={styles.menu__items}>
            <li className={styles.menu__items_item}>Главная</li>
            <li className={styles.menu__items_item}>Магазин</li>
            <li className={styles.menu__items_item}>Инструкция</li>
            <li className={styles.menu__items_item}>Корзина</li>
            <li className={styles.menu__items_item}>Авторизация</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;