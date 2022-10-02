import cls from "./Header.module.scss"
import logoImg from "./../../assets/img/rubik.png"
import {NavLink} from "react-router-dom";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState, useEffect} from 'react';
import Measure from "react-measure";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";


const Header = () => {

    const [isMenu, setIsMenu] = useState(false);

    return (
        <header>
            <div className={cls.logo}>
                <div className={cls.logo_img}>
                    <img src={logoImg} alt=""/>
                </div>
                <div className={cls.logo_span}>
                    <NavLink to={"/"} title={"На главную"}>GameBoy</NavLink>
                </div>
            </div>

            <div className={cls.links}>
                <div><NavLink to={"/shop"} title={"В магазин"}>Магазин</NavLink></div>
                <div><NavLink to={"/instruction"} title={"К интсрукции"}>Инструкция</NavLink></div>
                <div><NavLink to={"/basket"} title={"В корзину"}>Корзина</NavLink></div>
                <div><NavLink to={"/login"} title={"Войти"}>Вход</NavLink></div>
            </div>

            <div className={cls.menu_sc}>
                <div className={cls.menu_sc_button}>
                    <FontAwesomeIcon onClick={() => setIsMenu(!isMenu)} icon={faBars}
                                     className={cls.menu_sc_button_button}/>
                </div>
                {isMenu &&
                    <div className={cls.menu_sc_items}>
                        <NavLink to={"/shop"} title={"В магазин"}>Магазин</NavLink>
                        <NavLink to={"/instruction"} title={"К интсрукции"}>Инструкция</NavLink>
                        <NavLink to={"/basket"} title={"В корзину"}>Корзина</NavLink>
                        <NavLink to={"/login"} title={"Войти"}>Вход</NavLink>
                    </div>}
            </div>

        </header>
    )
}

export default Header;