import Beef from "./components/beef/beef.component";
import BottomBun from "./components/bottom-bun/bottom.bun";
import Cheese from "./components/cheese/cheese.component";
import Lettuce from "./components/lettuce/lettuce";
import Onion from "./components/onion/onion.component";
import Tomato from "./components/tomato/tomato.component";
import TopBun from "./components/top-bun/top.bun.component";
import './../../styles/burger.scss'
import Sauce, {RangeType} from "./components/sauce/sauce.component";

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