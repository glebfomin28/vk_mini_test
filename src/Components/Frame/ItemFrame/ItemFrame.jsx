import React, {useState} from "react";
import "./ItemFrame.css";
import {useDispatch, useSelector} from "react-redux";
import {coinReduction} from "../../../Redux/bankCoinsSlice_reducers";
import {purchaseItem} from "../../../Redux/buyItemSlice_reducers";
import {Div} from "@vkontakte/vkui";
import coin from "../img/coin.svg";

function ItemFrame(props) {
    const dispatch = useDispatch();
    const bankCoins = useSelector(state => state.bankCoins.bankCoinNum)
    const priceItem = useSelector(state => state.item.itemList[props.id - 1].price)

    let flag = true;
    let style_name = {color: "#000000"}
    let body_gray = {opacity: "1"}

    // Если цена достигла +=1000 color name red
    if (priceItem >= 1000) style_name.color = "#af0000";

    // Если цена достигла +=1200 затемнить
    if (priceItem >= 1200) {
        style_name.color = "#6b6a6a";
        body_gray.opacity = "0.3"
        flag = false
    }

    // Всплывающие сообщение
    if (bankCoins <= 45000 && bankCoins >= 44000) props.openAction();


    //Сброс приложения
    if (bankCoins <= 0) {
        props.modalRootFunc()
    }

    const clickItem = () => {
        if (priceItem >= 1200) {
            props.limitExceeded()
        }

        // Пока цена не выше 1200
        if (flag) {
            dispatch(coinReduction(priceItem));
            dispatch(purchaseItem(props.id - 1));
        }
    }

    return (
        <Div onClick={clickItem} className="item_frame" style={body_gray} >
            <img className="img_box" src={props.imgItem}/>
            <Div className="name_item" style={style_name}>{props.name}</Div>
            <Div className="price_coin" style={style_name}>
                <img src={coin}/>
                <Div className="price_coin_text">{priceItem}</Div>
            </Div>
        </Div>

    );
}

export default ItemFrame;
