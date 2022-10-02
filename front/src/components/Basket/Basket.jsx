import React from "react";
import cls from "./Basket.module.scss"
import {connect} from "react-redux";
import BasketItem from "./BasketItem";
import BasketBuyMenu from "./BasketBuyMenu";
import {delItemFromBasket} from "../../redux/basket-reducer";
import {basketItemsSelector} from "../../redux/basket-selectors";
import {NavLink} from "react-router-dom";
import c from "classnames"

const Basket = ({basketItems, delItemFromBasket}) => {

    return (
        <div className={c(cls.basket, "animate__animated", "animate__fadeIn")}>
            <div className={cls.basket_header}>
                <div className={cls.logo}>
                    <h2>Корзина</h2>
                </div>
                <div className={cls.link_to_shop}>
                    <NavLink to={"/shop"}>В магазин</NavLink>
                </div>
            </div>
            <div className={cls.list_menu}>
                <div className={cls.basket_list}>
                    {basketItems.map(item => {
                        return <BasketItem key={item.id} id={item.id} title={item.title} platform={item.platform}
                                           price={item.price}
                                           photo={item.photo} delItemFromBasket={delItemFromBasket}/>
                    })
                    }
                </div>
                <div>
                    <BasketBuyMenu basketItems={basketItems}/>
                </div>
            </div>
        </div>

    )
}

export default connect((state) => ({
    basketItems: basketItemsSelector(state)
}), {delItemFromBasket})(Basket);