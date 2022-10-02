import cls from "./Instruction.module.scss"
import {NavLink} from "react-router-dom";
import c from "classnames"


const Instruction = () => {
    return (
        <div className={c(cls.instruction, "animate__animated", "animate__fadeIn")}>
            <div className={cls.header}>
                <h2>Инструкция</h2>
            </div>
            <div className={cls.list}>
            <ol type="1">
                <li>Добавляете в корзину и покупает те игры, которые вам нужны</li>
                <li>Мы создаем аккаунт, куда загружаем нужные вам игры</li>
                <li>Предоставляем доступ к аккаунту вам</li>
                <li>Все счастливы</li>
            </ol>
            </div>
            <div className={cls.button}>
                <NavLink to={"/shop"}><button>Все понял<br/>Лечу в магазин</button></NavLink>
            </div>
        </div>
    )
}

export default Instruction;