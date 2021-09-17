import React from 'react'
import {Switch, Route} from "react-router-dom";

import RegisterTravel from "./modules/Travels/register-trip/RegisterTravelComponent";

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path="/Travel/RegisterTravel"
                component={<RegisterTravel />}
            />
        </Switch>
    );
}

export default Routes
