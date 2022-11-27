import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./basket.module.scss"
import BasketOrder from "../../components/BasketOrder/basket-order";
import {useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../redux/store";
import {basketSelector} from "../../redux/basket-selectors";
import Game from "../../components/ShopPage/Game/Game";
import {delItemFromBasket} from "../../redux/basket-reducer";
import BasketList from "../../components/BasketList";

const BasketPage = () => {
  const [basketList, setBasketList] = useState(basketSelector(store.getState()))
  useEffect(() => {
    setBasketList(() => (basketSelector(store.getState())))
  },[])

  const basketSum = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price, 0)
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <BasketList basketList={basketList}/>
        </div>
        <div className={styles.order}>
          <BasketOrder count={basketList.length} price={basketSum}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasketPage;