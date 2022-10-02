import cls from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className={cls.soc_networks}>
                <span>Связаться с нами:</span>
                <a href="https://web.telegram.org"  target="_blank" title={"Telegram"}><FontAwesomeIcon icon={faTelegram} className={cls.tg}/></a>
                <a href="https://vk.com/"  target="_blank" title={"Vk"}><FontAwesomeIcon icon={faVk} className={cls.tg}/></a>
                <a href="https://discord.com/"  target="_blank" title={"Discord"}><FontAwesomeIcon icon={faDiscord} className={cls.tg}/></a>
            </div>
            <div className={cls.copyright}>
                <span>
                    GameBoy © 2022
                </span>

            </div>
        </div>
    )
}

export default Footer;