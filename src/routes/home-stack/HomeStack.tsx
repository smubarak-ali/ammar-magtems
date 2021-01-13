import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamList } from "routes/home-stack/HomeStackParamList";
import HomeScreen from "screens/home/HomeScreen";

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};
