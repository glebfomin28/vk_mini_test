import React from "react";
import "./HeadPanel.css";
import coins from "./IconHeader/coins.svg";
import {useSelector} from "react-redux";
import {Div, PanelHeader, PanelHeaderContent} from "@vkontakte/vkui";

const HeadPanel = () => {
    let bankCoins = useSelector(state => state.bankCoins.bankCoinNum)
    if (bankCoins >= 1000) {
        bankCoins = Math.trunc(bankCoins / 1000) + 'k';
    }
    return (
        <PanelHeader separator={false}>
            <PanelHeaderContent>
                <Div className="panel_header">
                    <Div className="bank">
                        <img src={coins} alt="coins"/>
                        {bankCoins}
                    </Div>
                    <Div className="text_center">Магазин</Div>
                </Div>
            </PanelHeaderContent>
        </PanelHeader>
    )
}

export default HeadPanel;


