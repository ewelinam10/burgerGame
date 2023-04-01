import React from "react";
import BeefButton from "./Burger/beef-button/beef-button.component";
import OnionButton from "./Burger/onion-button/onion-button.component";
import LetucceButton from "./Burger/lettuce-button/lettuce-button.component";
import CheeseButton from "./Burger/cheese-button/cheese-button.component";
import TopBunButton from "./Burger/top-bun-button/top-bun-button.component";
import BottomBunButton from "./Burger/bottom-bun-button/bottom-bun-button.component";
import TomatoButton from "./Burger/tomato-button/tomato-button.component";
import KetchupButton from "./Sauces/ketuchp-button/ketchup-button.component";
import {Grid} from "@mui/material";
import MustardButton from "./Sauces/mustard-button/mustard-button.component";


const IngridentsMenu: React.FC = () => {

    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <BeefButton/>
                </Grid>
                <Grid item>
                    <OnionButton/>
                </Grid>
                <Grid item>
                    <LetucceButton/>
                </Grid>
                <Grid item>
                    <CheeseButton/>
                </Grid>
                <Grid item>
                    <TopBunButton/>
                </Grid>
                <Grid item>
                    <BottomBunButton/>
                </Grid>
                <Grid item>
                    <TomatoButton/>
                </Grid>
                <Grid item>
                    <KetchupButton/>
                </Grid>
                <Grid item>
                    <MustardButton/>
                </Grid>
            </Grid>
        </>
    );
};

export default IngridentsMenu