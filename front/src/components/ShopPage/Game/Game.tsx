import React from 'react';
import styles from "./game.module.scss";
import {Image} from "antd";
import Link from "next/link";

interface IGame {
  id: number,
  src: string,
  title: string,
  platform: string,
  price: number
}

const Game: React.FC<IGame> = (props) => {
  return (
    <div className={styles.item} key={props.id}>
      <Image
        className={styles.item_img}
        width={200}
        height={250}
        src={props.src}
      />
      <div className={styles.item_title}>{props.title}</div>
      <div className={styles.item_text}>{props.platform}</div>
      <div className={styles.img_text}>{props.price}</div>
    </div>
  );
};

export default Game;