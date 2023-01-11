import React from 'react';
import styles from "./basket-order.module.scss"
import Button from "../../modules/Button/Button";

interface IBasketOrder {
  price?: number;
  count?: number;
}

const BasketOrder: React.FC<IBasketOrder> = ({price=0, count=0}) => {
  return (
    <div className={styles.wrapper}>
      <Button text={"Оформить"}/>
      <div className={styles.modal}>
        <div className={styles.modal__price}>Итого: {price} ₽</div>
        <div className={styles.modal__count}>Количество товаров: {count}</div>
      </div>
    </div>
  );
};

export default BasketOrder;