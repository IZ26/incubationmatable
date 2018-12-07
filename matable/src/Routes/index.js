import React from "react";
import { createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import {HomeScreen, ResultsScreen, Orders, OrdersDetails, Evaluation} from "../components";
import {Image, Button} from "react-native";
import {Header} from "../Layouts";

const MainDrawer = createDrawerNavigator(
    {
        Commandes: {
            screen: ResultsScreen,
            navigationOptions: () =>
                ({
                    title: 'Commandes clients'
                })
        },
        Orders: {
            screen: Orders,
            navigationOptions: () =>
                ({
                    title: 'Commandes en cours'
                })
        },
    },
)

const RootStack = createStackNavigator(
    {
        Login: {
            screen: HomeScreen,
        },
        Main: {
            screen: MainDrawer
        },
        Orders: {
            screen: Orders,
        },
        OrdersDetails: {
            screen: OrdersDetails
        },
        Evaluation: {
            screen: Evaluation
        }
    }, {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
)

export const AppContainer = createAppContainer(RootStack);