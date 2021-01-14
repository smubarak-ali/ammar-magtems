import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";

import Routes from "routes/Routes";

enableScreens();

export default () => {
    return <Routes />;
};
