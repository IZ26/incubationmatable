import React, {Component} from "react";
import { Container, Text, Button , Picker, Icon} from 'native-base';
import {Header} from "../../Layouts";
import {View} from "react-native";
import {styles} from "./styles";


export default class OrdersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text style={styles.text}>Table 0</Text>
                    <Text style={styles.text}>Plats commandés :</Text>
                    <Text style={styles.textList}>Spaghetti Bolognaises</Text>
                    <Text style={styles.textListLastChild}>Hamburger Frites</Text>
                    <Button full info style={styles.btn} onPress={() => this.props.navigation.navigate("Evaluation")}>
                        <Text>Laisser une évaluation</Text>
                    </Button>
                    <Button full danger onPress={() => this.props.navigation.goBack()}><Text>Aucune évaluation</Text></Button>
                </View>
            </Container>
        );
    }
}