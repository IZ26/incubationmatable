import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import { Button, Text, Header, Container, Left } from 'native-base';
import {styles} from "./styles";
import {FormsGroup} from "../../Layouts";


export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <Container>
                <FormsGroup/>
            </Container>
        );
    }
}