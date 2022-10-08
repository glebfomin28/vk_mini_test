import style from "./MineScreen.module.css";
import mineScreen from "../main_screen_img.svg";
import {Div} from "@vkontakte/vkui";


function MineScreen() {
    return (
        <div className={style.mine_screen}>
            <img src={mineScreen} alt="mine_screen"/>
        </div>
    );
}

export default MineScreen;
