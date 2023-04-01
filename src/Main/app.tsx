//import TopBun from '@Components/BurgerComponents/TopBun' - why cant i use absolute paths in creat-react-app :(
import React from 'react';
import Burger from '../Components/Burger/Burger';
import '../styles/App.scss';
import IngridentsMenu from "../Components/Ingridients-Menu/ingridients-menu.component";
import {Grid} from "@mui/material";
import PlayArea from "../Components/Play-Area/play-area.component";
import {AppStyled} from "./app.style";

function App() {
    return (
        <AppStyled>
            <Grid container direction={'column'} spacing={10}>
                <Grid container direction={'row'} item xs={8}>
                    <Grid item xs={4}>
                        <Burger/>
                    </Grid>
                    <Grid item xs={8}>
                        <PlayArea/>
                    </Grid>
                </Grid>
                <Grid item>
                    <IngridentsMenu/>
                </Grid>
            </Grid>
        </AppStyled>
    );
}

export default App;
