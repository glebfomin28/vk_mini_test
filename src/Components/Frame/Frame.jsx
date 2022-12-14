import React from "react";
import "./Frame.css";
import ItemFrame from "./ItemFrame/ItemFrame";
import defState from "../../Redux/defState";
import {Div, Group} from "@vkontakte/vkui";


function Frame(props) {

    // Отрисовка товатов
    let ItemFrameElements = defState.itemList.map( elItem => {
        return(
            <ItemFrame
                key={elItem.id}
                id={elItem.id}
                name={elItem.name}
                price={elItem.price}
                imgItem={elItem.imgItem}
                limitExceeded={props.limitExceeded}
                modalRootFunc={props.modalRootFunc}
                openAction={props.openAction}
            />)})

    return (
        <Group >
            <Div className="frame_text_head">{props.selected}</Div>
            {props.selected === "Одежда"?
                <Div className="frame_body">
                    {ItemFrameElements}
                </Div>
                :
                null
            }

        </Group>
    )
}

export default Frame;
