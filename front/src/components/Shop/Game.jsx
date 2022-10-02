import cls from "./Shop.module.scss"
import {NavLink} from "react-router-dom";


const Game = ({title, platform, price, photo, id, isAdded, addItemToBasket, elInBasket}) => {

    const addItem = () => {
        let el = document.getElementById(id);
        el.style.gridTemplateRows = "2fr 1fr 1fr 1fr 1fr 1fr";
        addItemToBasket(title, platform, price, photo, id);
        elInBasket(id, true);
        setTimeout(elInBasket, 2000, id, false);
        el.style.gridTemplateRows = "2fr 1fr 1fr 1fr 1fr";
    }

    return (
        <div id={id} className={cls.game}>
            <div className={cls.photo}>
                <img src={photo} alt="Тут фотка игры" title={title}/>
            </div>
            <div className={cls.info}>
                <NavLink to={"/shop"} title={title}>{title}</NavLink>
            </div>
            <div className={cls.platform}>
                <span>{platform}</span>
            </div>
            <div className={cls.price}>
                <span>{price} &#8381;</span>
            </div>
            <div className={cls.button}>
                <button onClick={addItem} title={"Купить"}>
                    Добавить в корзину
                </button>
            </div>
            {isAdded &&
                <div className={cls.game_in_basket}>
                    <span>Игра добавлена в <NavLink to={"/basket"}>корзину</NavLink></span>
                </div>
            }


        </div>
    )
}

export default Game