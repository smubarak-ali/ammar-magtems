import React, { FC } from "react";
import {} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerParamList } from "routes/drawer/DrawerParamList";
import { AppTab } from "routes/app-tab/AppTab";
import DrawerContent from "components/drawer-content/DrawerContent";

const Drawer = createDrawerNavigator<DrawerParamList>();

export const AppDrawer: FC = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Root" component={AppTab} />
        </Drawer.Navigator>
    );
};
