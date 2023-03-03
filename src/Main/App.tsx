//import TopBun from '@Components/BurgerComponents/TopBun' - why cant i use absolute paths in creat-react-app :(

import Burger from '../Components/Burger/Burger';
import '../styles/App.scss';
import IngridentsMenu from "../Components/Ingridients-Menu/ingridients-menu.component";

function App() {
    return (
        <>
            <Burger/>
            <IngridentsMenu/>
        </>
    );
}

export default App;
