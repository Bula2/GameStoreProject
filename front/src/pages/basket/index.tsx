import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./basket.module.scss"
import BasketOrder from "../../components/BasketOrder/basket-order";
import {connect, useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../redux/store";
import {changeBasket, getBasket} from "../../redux/basket-reducer";
import BasketList from "../../components/BasketList";

interface IBasketPage{
  getBasket: (id_customer: string)=> void,
  changeBasket: (id_customer: number) => void
}

const BasketPage: React.FC<IBasketPage> = ({getBasket, changeBasket}) => {

  useEffect(()=> {
    getBasket("1");
  }, [])

  const basketList = useSelector((state: RootState) => state.basket.data)

  const basketSum = basketList.reduce(
    (accumulator: any, currentValue: { price: any }) =>
      accumulator + currentValue.price, 0)

  return (
    <MainLayout>
      <div className={basketList.length === 0 ? styles.empty_wrapper :styles.wrapper}>
        <div className={styles.list}>
          <BasketList basketList={basketList} delItem={changeBasket}/>
        </div>
        <div className={styles.order}>
          <BasketOrder count={basketList.length} price={basketSum}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default connect((state: RootState) => ({}),
  {getBasket, changeBasket})(BasketPage);