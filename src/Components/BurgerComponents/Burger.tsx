import Beef from "./Beef";
import BottomBun from "./BottomBun";
import Cheese from "./Cheese";
import Lettuce from "./Lettuce";
import Onion from "./Onion";
import Tomato from "./Tomato";
import TopBun from "./TopBun";
import './../../styles/burger.scss'
import Ketchup from "./Ketchup";
export default function Burger() {
    return (
        <div className='burger_box'>
            <TopBun />
            <Ketchup />
            <Lettuce />
            <Tomato />
            <Onion />
            <Cheese />
            <Beef />
            <BottomBun />
        </div>

    )
}