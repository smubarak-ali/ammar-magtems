import React, { FC } from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from "@react-navigation/drawer";

// import { DrawerParamList } from "routes/drawer/DrawerParamList";

interface Props extends DrawerContentComponentProps {}

const DrawerContent: FC<Props> = (props) => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
                <DrawerItem label="Profile" onPress={() => navigation.navigate("Profile")} />
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;
