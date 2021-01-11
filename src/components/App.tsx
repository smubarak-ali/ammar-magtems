import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";

export default () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 17 }}>
                Hello there, <Text style={{ fontWeight: "bold" }}>How are you?</Text>
            </Text>
        </View>
    );
};
