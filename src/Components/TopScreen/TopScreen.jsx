import React from 'react';
import "./TopScreen.css";
import Button1 from "./Buttons/Buttons1";
import Button2 from "./Buttons/Buttons2";
import Button3 from "./Buttons/Buttons3";
import Button4 from "./Buttons/Buttons4";
import {Div, Group} from "@vkontakte/vkui";
import mineScreen from "./main_screen_img.svg";

function TopScreen() {

    return (
        <Group style={{position:"relative", marginTop: "18px"}} >
            <img style={{width:"100%"}} src={mineScreen} alt="mine_screen"/>
            <Div style={{
                margin: "-6px 10px",
                width: "340px",
                position: "relative",
                display: "flex"}}
            >
                <Button1/>
                <Button2/>
                <Button3/>
                <Button4/>
            </Div>
        </Group>
    );
}

export default TopScreen;
