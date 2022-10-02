import cls from "./Shop.module.scss"
import {connect} from "react-redux";
import Game from "./Game";
import Fuse from "fuse.js";
import {useState} from "react";
import {addItemToBasket} from "../../redux/basket-reducer";
import {elInBasket} from "../../redux/shop-reducer";
import {NavLink} from "react-router-dom";
import c from "classnames"

const Shop = ({gamesList, addItemToBasket, elInBasket}) => {

    const [games, setData] = useState(gamesList);


    const searchData = (pattern) => {
        if (!pattern) {
            setData(gamesList);
            return;
        }

        const fuse = new Fuse(games, {
            keys: ["title"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setData(matches);
        }
    };

    return (
        <div className={c(cls.shop, "animate__animated", "animate__fadeIn")}>
            <div className={cls.top}>
                <div className={cls.search}>
                    <label htmlFor="site-search">Найти:</label>
                    <input onChange={(e) => searchData(e.target.value)} type="text"
                           id="site-search" placeholder={"Поиск в магазине"}/>
                </div>
                <div>
                    <h2 className={cls.title}>Магазин</h2>
                </div>
                <div className={cls.link_to_basket}>
                    <NavLink to={"/basket"}>В корзину</NavLink>
                </div>
            </div>
            <div className={cls.games_list}>
                {games.map(game => {
                        return (
                            <Game key={game.id} id={game.id} title={game.title} platform={game.platform}
                                  price={game.price} photo={game.photo} isAdded={game.isAdded}
                                  addItemToBasket={addItemToBasket}
                                  elInBasket={elInBasket}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default connect(
    (state) => ({
        gamesList: state.shopPage.games
    }), {addItemToBasket, elInBasket})(Shop);