import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./basket.module.scss"
import BasketOrder from "../../components/BasketOrder/basket-order";
import {connect, useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../redux/store";
import {basketSelector} from "../../redux/basket-selectors";
import Game from "../../components/ShopPage/Game/Game";
import {delItemFromBasket, IGame} from "../../redux/basket-reducer";
import BasketList from "../../components/BasketList";

interface IBasketPage{
  basketList: IGame[];
  delItemFromBasket: (id: number) => void;
}

const BasketPage: React.FC<IBasketPage> = ({basketList, delItemFromBasket}) => {

  const basketSum = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price, 0)
  return (
    <MainLayout>
      <div className={basketList.length === 0 ? styles.empty_wrapper :styles.wrapper}>
        <div className={styles.list}>
          <BasketList basketList={basketList} delItem={delItemFromBasket}/>
        </div>
        <div className={styles.order}>
          <BasketOrder count={basketList.length} price={basketSum}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default connect((state: RootState) => ({
  basketList: basketSelector(state)
}), {delItemFromBasket})(BasketPage);