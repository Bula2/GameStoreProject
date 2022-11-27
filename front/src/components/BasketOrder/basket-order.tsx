import React from 'react';
import styles from "./basket-order.module.scss"
import Button from "../../modules/Button/Button";

const BasketOrder = () => {
  return (
    <div className={styles.wrapper}>
      <Button text={"Оформить"}/>
      <div className={styles.modal}>
        <div>Итого: </div>
        <div>Количетсво товаров: </div>
      </div>
    </div>
  );
};

export default BasketOrder;