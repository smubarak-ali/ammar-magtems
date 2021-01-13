import React, { FC } from "react";
import {} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppTabParamList } from "routes/app-tab/AppTabParamList";
import { HomeStack } from "routes/home-stack/HomeStack";
import { ProfileStack } from "routes/profile-stack/ProfileStack";

const Tabs = createBottomTabNavigator<AppTabParamList>();

export const AppTab: FC = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} />
        </Tabs.Navigator>
    );
};
