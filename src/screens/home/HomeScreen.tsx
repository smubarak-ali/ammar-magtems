import React, { FC } from "react";
import { View, Text } from "react-native";
import { useTheme } from "hooks/useTheme";

interface Props {}

const HomeScreen: FC<Props> = ({}) => {
    const { theme } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: theme.colors.primary }}>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
