import React, {Component} from "react";
import {Image} from "react-native";
import {Header, Button, Icon, Title, Body, Left} from "native-base"
import {imagesLibrary} from "../../assets/imagesLibrary";
import { withNavigation } from 'react-navigation';
import { DrawerActions , DrawerItems} from 'react-navigation';

class HeaderBar extends React.Component {
    render() {
        return (
            <Header
            style={{backgroundColor: "#220108"}}
            >
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}

export default withNavigation(HeaderBar);