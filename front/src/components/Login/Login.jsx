import cls from "./Login.module.scss"
import {useState} from "react";
import c from "classnames"

const Login = () => {

    let [text, changeText] = useState(null)

    const addFunnyText = () => {
        changeText("Не пущу, ты мне не нравишься 😒");
        setTimeout(changeText, 2500, "Шутка, нравишься! Эта часть просто еще не дописана 😘");
        setTimeout(changeText, 5500, null);

    }

    return (
        <div className={c(cls.login,"animate__animated", "animate__fadeIn")}>
            <div className={cls.header}>
                <h2>Вход</h2>
            </div>
            <div className={cls.input}>
                <input type={"text"} placeholder={"Электронная почта"}/>
            </div>
            <div className={cls.input}>
                <input type={"password"} placeholder={"Пароль"}/>
            </div>
            <div className={cls.checkbox}>
                <label htmlFor="remember_me">
                    Запомнить меня
                </label>
                <div>
                    <input id={"remember_me"} type={"checkbox"}/>
                </div>
            </div>
            <div>
                <button onClick={addFunnyText}>Вход</button>
            </div>
            {text &&
                <div className={cls.funny_text}>
                    <span>
                        {text}
                    </span>
                </div>
            }
        </div>
    )
}

export default Login;