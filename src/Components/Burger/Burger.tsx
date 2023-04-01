import Beef from "./components/beef/Beef";
import BottomBun from "./components/bottom-bun/BottomBun";
import Cheese from "./components/cheese/Cheese";
import Lettuce from "./components/lettuce/Lettuce";
import Onion from "./components/onion/Onion";
import Tomato from "./components/tomato/Tomato";
import TopBun from "./components/top-bun/TopBun";
import './../../styles/burger.scss'
import Sauce, {RangeType} from "./components/sauce/Sauce";

export default function Burger() {
    return (
        <div className='burger_box'>
            <TopBun/>
            <Sauce color="#f00" numberOfCurvyLines={3} order={RangeType.First}/>
            <Sauce color="#fffb0a" numberOfCurvyLines={3} order={RangeType.Second}/>
            <Lettuce/>
            <Tomato/>
            <Onion/>
            <Cheese/>
            <Beef/>
            <BottomBun/>
        </div>

    )
}