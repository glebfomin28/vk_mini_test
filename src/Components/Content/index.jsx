import HeadPanel from "../TopScreen/PanelHeader/HeadPanel";
import TopScreen from "../TopScreen/TopScreen";
import Frame from "../Frame/Frame";
import React, {useState} from "react";

export const Content = (props) => {
    const [sizeSelected, setSizeSelected] = useState("Одежда");

    const changeButton = (el) => {
        setSizeSelected(el)
    }

    return (
        <>
            {/*Компонент шапка. С балансом монеток*/}
            <HeadPanel/>

            {/*Компонент блок с картинкой и кнопками.*/}
            <TopScreen selected={sizeSelected} onChange={changeButton}/>

            {/*Компонент блок с карточками.*/}
            <Frame
                selected={sizeSelected}
                limitExceeded={props.limitExceeded}
                modalRootFunc={props.modalRootFunc}
                openAction={props.openAction}
            />
        </>
    )
}

