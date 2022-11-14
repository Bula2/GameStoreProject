import React, {useState} from 'react';
import styles from "./game.module.scss";
import {Button, Image} from "antd";
import Link from "next/link";
import cx from "classnames";

interface IGame {
  id: number,
  src: string,
  title: string,
  platform: string,
  price: number
}

const Game: React.FC<IGame> = (props) => {

  const [alert, useAlert] = useState(true)

  const showAlert = () => {
    useAlert(false)
    setTimeout(() => useAlert(true), 2000)
  }

  return (
    <div className={styles.item} key={props.id}>
      <div className={styles.item_img}>
        <Image
          className={styles.item_img}
          width={200}
          height={250}
          src={props.src}
        />
      </div>
      <div className={styles.item_info}>
        <div className={styles.item_title}>{props.title}</div>
        <div className={styles.item_platform}>{props.platform}</div>
        <div className={styles.item_price}>{props.price} ₽</div>
        <div className={styles.item_button} onClick={() => showAlert()}>Добавить в корзину</div>
      </div>
      <div className={cx(alert && styles.hide, styles.alert)}>Игра добавлена в корзину</div>
    </div>
  );
};

export default Game;