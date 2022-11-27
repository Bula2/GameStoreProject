import React, {useEffect, useState} from 'react';
import {delItemFromBasket, IGame} from "../redux/basket-reducer";
import Game from "./ShopPage/Game/Game";
import {useDispatch} from "react-redux";

interface IBasketList {
  basketList: IGame[]
}

const BasketList: React.FC<IBasketList> = ({basketList}) => {
  const dispatch = useDispatch()
  const delItem = (id: number) => dispatch(delItemFromBasket(id))
  return (
    <>
      {basketList.map(it =>
        <Game id={it.id} src={it.src} title={it.title}
              platform={it.platform} price={it.price}
              isBasket={true} delItem={delItem}/>
      )}
    </>
  );
};

export default BasketList;