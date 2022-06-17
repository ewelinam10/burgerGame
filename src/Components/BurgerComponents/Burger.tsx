import Beef from "./Beef";
import BottomBun from "./BottomBun";
import Cheese from "./Cheese";
import Lettuce from "./Lettuce";
import Onion from "./Onion";
import Tomato from "./Tomato";
import TopBun from "./TopBun";
import './../../styles/burger.scss'
import Sauce, { RangeType } from "./Sauce";
export default function Burger() {
    return (
        <div className='burger_box'>
            <TopBun />
            <Sauce color="#f00" numberOfCurvyLines={3} order={RangeType.First} />
            <Sauce color="#fffb0a" numberOfCurvyLines={3} order={RangeType.Second} />
            <Lettuce />
            <Tomato />
            <Onion />
            <Cheese />
            <Beef />
            <BottomBun />
        </div>

    )
}