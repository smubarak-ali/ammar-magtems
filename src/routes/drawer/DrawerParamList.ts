import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";

export type DrawerParamList = {
    Root: undefined;
    Home: undefined;
    Profile: undefined;
};

export type DrawerNavProps<T extends keyof DrawerParamList> = {
    navigation: DrawerNavigationProp<DrawerParamList, T>;
    route: RouteProp<DrawerParamList, T>;
};
