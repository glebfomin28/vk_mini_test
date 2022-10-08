import imgItem1 from "../Components/Frame/img/kepka_.svg";
import imgItem2 from "../Components/Frame/img/ringgreen.svg";
import imgItem3 from "../Components/Frame/img/hoodblue.svg";
import imgItem4 from "../Components/Frame/img/robin_gud.svg";
import imgItem5 from "../Components/Frame/img/solomennaya_shlyapa.svg";
import imgItem6 from "../Components/Frame/img/ochki_umnika.svg";

const defaultState = {
    itemList: [
        {id:1, name:"Кепка модника", price: 300, imgItem: imgItem1},
        {id:2,name:"Кольцо удачи", price: 500,  imgItem:imgItem2},
        {id:3,name:"Толстовка умн.", price: 500, imgItem:imgItem3},
        {id:4,name:"Шапка счастья", price: 500, imgItem:imgItem4},
        {id:5,name:"Шляпа ферм...", price: 500, imgItem:imgItem5},
        {id:6,name:"Очки умника", price: 500, imgItem:imgItem6},
    ]
}
export default defaultState;