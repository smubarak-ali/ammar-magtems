import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ProfileStackParamList = {
    Profile: undefined;
};

export type ProfileStackNavProps<T extends keyof ProfileStackParamList> = {
    navigation: StackNavigationProp<ProfileStackParamList, T>;
    route: RouteProp<ProfileStackParamList, T>;
};
