import React, {useState} from 'react';
import "./TopScreen.css";
import "@vkontakte/vkui/dist/vkui.css";
import {Div, Group, SubnavigationBar, SubnavigationButton} from "@vkontakte/vkui";
import mineScreen from "./main_screen_img.svg";

function TopScreen(props) {
    const onChange = (e) => {
        props.onChange(e.currentTarget.attributes[2].nodeValue)
    }

    const buttList = ['Одежда','Еда', 'Бустеры', 'Валюта'].map( (name, index) => {
        return(
            <SubnavigationButton
                key={index}
                selected={props.selected ===  name}
                onClick={onChange}
            >
                {name}
            </SubnavigationButton>
        )})

    return (
        <Group style={{position:"relative", marginTop: "18px"}} >
            <img style={{width:"100%"}} src={mineScreen} alt="mine_screen"/>
            <Div style={{
                margin: "-6px 10px",
                width: "340px",
                position: "relative",
                display: "flex"}}
            >
                <SubnavigationBar style={{margin: "-20px -20px -10px"}}>
                    {buttList}
                </SubnavigationBar>
            </Div>
        </Group>
    );
}

export default TopScreen;
