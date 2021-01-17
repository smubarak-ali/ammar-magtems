import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";

import Routes from "routes/Routes";
import { ThemeProvider } from "context/ThemeContext";

enableScreens();

export default () => {
    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    );
};
