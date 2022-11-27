import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./basket.module.scss"
import BasketOrder from "../../components/BasketOrder/basket-order";
import {useSelector} from "react-redux";
import {RootState, store} from "../../redux/store";
import {basketSelector} from "../../redux/basket-selectors";
import Game from "../../components/ShopPage/Game/Game";

const BasketPage = () => {
  const basketList = basketSelector(store.getState())
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {basketList.map(it =>
            <Game id={it.id} src={it.src} title={it.title}
                  platform={it.platform} price={it.price}/>
          )}
        </div>
        <div className={styles.order}>
          <BasketOrder/>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasketPage;