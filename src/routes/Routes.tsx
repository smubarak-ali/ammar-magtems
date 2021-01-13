import React, { FC } from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppDrawer } from "routes/drawer/Drawer";

const Routes: FC = () => {
    return (
        <NavigationContainer>
            <AppDrawer />
        </NavigationContainer>
    );
};

export default Routes;
