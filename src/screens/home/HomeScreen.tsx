import React, { FC } from "react";
import { View, Text } from "react-native";

interface Props { }

const HomeScreen: FC<Props> = ({ }) => {
    
    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;
