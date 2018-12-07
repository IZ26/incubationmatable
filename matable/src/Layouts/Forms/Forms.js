import React, {Component} from "react";
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import {styles} from "./styles";
import axios from "axios";
import { withNavigation } from 'react-navigation';
import {Image} from "react-native";
import {imagesLibrary} from "../../assets/imagesLibrary";


class Forms extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Image
                    source={imagesLibrary.Logo}
                    style={styles.img}
                />
                    <Form style={styles.form}>
                        <Item>
                            <Input
                                placeholder="Email"
                                floatingLabel={true}
                            />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Mot de passe"
                                inlineLabel={true}
                            />
                        </Item>
                        <Button
                            onPress={() => this.props.navigation.navigate('Commandes')}
                            style={styles.button}>
                            <Text>Connexion</Text>
                        </Button>
                    </Form>
            </Container>
        )
    }
}

export default withNavigation(Forms);