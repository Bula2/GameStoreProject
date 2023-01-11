import React, {useState} from 'react';
import styles from "./game.module.scss";
import {Button, Image} from "antd";
import Link from "next/link";
import cx from "classnames";
import {useDispatch} from "react-redux";
import {addItemToBasket, delItemFromBasket} from "../../../redux/basket-reducer";
import {addGameToOrder} from "../../../api/api";
import axios from "axios";

interface IGame {
  id: number,
  src?: string,
  title: string,
  price: number,
  isBasket: boolean,
  idOrder?: number,
  delItem?: (id_order: string) => void
}

const Game: React.FC<IGame> = (props) => {

  const [alert, setAlert] = useState(true)
  const dispatch = useDispatch()

  const showAlert = async () => {
    // dispatch(addItemToBasket(props.id, props.src, props.title, "PS4/PS5", props.price))
    await addGameToOrder(props.id.toString(), "1", "1")
    setAlert(false)
    setTimeout(() => setAlert(true), 2000)
  }

  return (
    <div className={styles.item} key={props.id}>
      {props.src && <div className={styles.item_img}>
          <Image
              className={styles.item_img}
              width={200}
              height={250}
              src={props.src}
          />
      </div>
      }

      <div className={styles.item_info}>
        <div className={styles.item_title}>{props.title}</div>
        <div className={styles.item_platform}>PS4/PS5</div>
        <div className={styles.item_price}>{props.price} ₽</div>
        {props.isBasket ?
          <div className={styles.item_button}
               onClick={() => props.delItem!(props?.idOrder?.toString()!)}>
            Удалить из корзины
          </div> :
          <div className={styles.item_button}
               onClick={() => showAlert()}>
            Добавить в корзину
          </div>
        }
      </div>
      <div className={cx(alert && styles.hide, styles.alert)}>Игра добавлена в корзину</div>
    </div>
  );
};

export default Game;