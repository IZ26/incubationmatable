import React, {Component} from 'react';
import { Container,  Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,  CheckBox, ActionSheet } from 'native-base';
import {imagesLibrary} from "../../assets/imagesLibrary";
import {Header} from "../../Layouts";
import {ScrollView, View} from "react-native";
import {styles} from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';


const listItems = [
    {
        id: 1,
        img: imagesLibrary.pasta,
        title: "Pasta",
        price: "14 $",
    },
    {
        id: 2,
        img: imagesLibrary.eggs,
        title: "Hamburger",
        price: "13 $",
    },
    {
        id: 3,
        img: imagesLibrary.pasta,
        title: "Spaghetti Bolognaise",
        price: "18 $",
    },
    {
        id: 4,
        img: imagesLibrary.eggs,
        title: "Pizza 4 fromages",
        price: "14 $",
    },
    {
        id: 5,
        img: imagesLibrary.pasta,
        title: "Salades verdi",
        price: "13 $",
    },
    {
        id: 6,
        img: imagesLibrary.eggs,
        title: "Veggie Food",
        price: "10 $",
    },
    {
        id: 7,
        img: imagesLibrary.pasta,
        title: "Entrecôte frites",
        price: "30 $",
    },
    {
        id: 8,
        img: imagesLibrary.pasta,
        title: "Entrecôte frites",
        price: "30 $",
    },
    {
        id: 9,
        img: imagesLibrary.pasta,
        title: "Entrecôte frites",
        price: "30 $",
    },
    {
        id: 10,
        img: imagesLibrary.pasta,
        title: "Entrecôte frites",
        price: "30 $",
    },
]

const BUTTONS = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5", "Table 6", "Table 7", "Table 8", "Table 9", "Table 10"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class Results extends Component {
    state = {
        isChecked: false,
        itemId: [],
        clicked: undefined,
        showAlert: false
    }

    onCheckPress(itemId){
        let tmp = this.state.itemId;

        if ( tmp.includes(itemId) ) {
            tmp.splice( tmp.indexOf(itemId), 1 );
        } else {
            tmp.push(itemId);
        }

        this.setState({
            itemId: tmp
        });
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    render() {
        return (
            <Container>
                <Header title="Commandes clients"/>
                <View style={{flex: 1}}>
                    <ScrollView style={styles.scrollview}>
                    <List>
                        {
                            listItems.map((items, index) => {
                                return(
                                    <ListItem thumbnail key={index} onPress={this.onCheckPress.bind(this, items.id)}>
                                        <Left>
                                            <Thumbnail square source={items.img} />
                                        </Left>
                                        <Body>
                                        <Text>{items.title}</Text>
                                        <Text note numberOfLines={1}>{items.price}</Text>
                                        </Body>
                                        <Right>
                                            <CheckBox checked={this.state.itemId.includes(items.id)} />
                                        </Right>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                    </ScrollView>
                    <Button
                        full
                        disabled={this.state.itemId.length <= 0 ? true : false}
                        onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Pour la table ..."
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] }, () => {
                                        this.showAlert()
                                    });
                                }
                            )}
                    >
                        <Text>Valider la commande</Text>
                    </Button>
                    <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={false}
                        title="Votre commande a été envoyée en cuisine"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={false}
                        showConfirmButton={true}
                        confirmText="Ok"
                        confirmButtonColor="#2E7D32"
                        titleStyle={styles.alert}
                        messageStyle={styles.alert}
                        onConfirmPressed={() => {
                            this.setState({
                                itemId: []
                            }, () => {
                                this.hideAlert()
                            })
                        }}
                    />
                </View>
            </Container>
        );
    }
}