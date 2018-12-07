import React, {Component} from 'react';
import { Container, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import {Header} from "../../Layouts";
import {ScrollView, View} from "react-native";

export default class inProcess extends Component {
    render() {
        return (
            <Container>
                <Header title="Commandes en cours"/>
                <Content>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                            <Left>
                                <Text>Table 1</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                            <Left>
                                <Text>Table 2</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('OrdersDetails')}>
                            <Left>
                                <Text>Table 3</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}