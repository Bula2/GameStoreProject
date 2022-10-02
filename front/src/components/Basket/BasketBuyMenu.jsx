import cls from "./Basket.module.scss"
import {useState} from "react";
import {NavLink} from "react-router-dom";

const BasketBuyMenu = ({basketItems}) => {

    let [sum] = useState(0)
    let [isBuy, setIsBuy] = useState(false)
    let [isBasketEmpty, setIsBasketEmpty] = useState(false)

    const buttonHandling = () => {
        if (basketItems.length === 0) {
            setIsBasketEmpty(true);
            setIsBuy(false)
        } else {
            setIsBuy(true)
        }


    }

    basketItems.forEach(item => {
        sum += item.price
    })

    return (
        <>
            <div className={cls.buy_menu}>
                <div className={cls.header_buy_menu}>
                    <div>
                        <span>Список игр</span>
                    </div>
                    <div className={cls.buy_menu_info}>
                        {basketItems.length > 0 ?
                            <ul>
                                {basketItems.map(item => {
                                    return (
                                        <li key={item.id}>{item.title}</li>
                                    )
                                })}
                            </ul>
                            : <span>Тут пока пустовато :(</span>
                        }

                    </div>
                </div>
                <div className={cls.buy_menu_sum}>
                    <span>Итого: {sum} &#8381;</span>
                </div>
                <div className={cls.buy_menu_button}>
                    <button onClick={buttonHandling}>Перейти к оформлению</button>
                    {
                        isBasketEmpty &&
                        <div className={cls.buy_menu_req}>
                            <span>Корзина пуста</span>
                        </div>
                    }
                    {isBuy &&
                        <div className={cls.buy_menu_req}>
                        <span>
                            Необходимо <NavLink to={"/login"} title={"Перейти к входу"}>Войти в аккаунт</NavLink>
                        </span>
                        </div>
                    }
                </div>
            </div>
            <div className={cls.buy_menu_mobile}>
                <div className={cls.buy_menu_sum_mobile}>
                    <span>Итого: {sum} &#8381;</span>
                </div>
                <div className={cls.buy_menu_button_mobile}>
                    <button onClick={buttonHandling}>Перейти к оформлению</button>
                    {
                        isBasketEmpty &&
                        <div className={cls.buy_menu_req}>
                            <span>Корзина пуста</span>
                        </div>
                    }
                    {isBuy &&
                        <div className={cls.buy_menu_req}>
                        <span>
                            Необходимо <NavLink to={"/login"} title={"Перейти к входу"}>Войти в аккаунт</NavLink>
                        </span>
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default BasketBuyMenu;