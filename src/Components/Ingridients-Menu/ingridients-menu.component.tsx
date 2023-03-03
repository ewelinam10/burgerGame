import React from "react";
import BeefButton from "../Add-Button/Components/Burger/beef-button.component";
import OnionButton from "../Add-Button/Components/Burger/onion-button.component";
import LetucceButton from "../Add-Button/Components/Burger/lettuce-button.component";
import CheeseButton from "../Add-Button/Components/Burger/cheese-button.component";
import TopBunButton from "../Add-Button/Components/Burger/top-bun-button.component";
import BottomBunButton from "../Add-Button/Components/Burger/bottom-bun-button.component";
import TomatoButton from "../Add-Button/Components/Burger/tomato-button.component";
import KetchupButton from "../Add-Button/Components/Sauces/ketchup-button.component";
import {Grid} from "@mui/material";
import MustardButton from "../Add-Button/Components/Sauces/mustard-button.component";


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