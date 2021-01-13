import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileStackParamList } from "routes/profile-stack/ProfileStackParamList";
import ProfileScreen from "screens/profile/ProfileScreen";

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStack: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};
