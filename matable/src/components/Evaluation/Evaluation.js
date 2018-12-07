import React, {Component} from "react";
import { Container, Text, Button , Picker, Icon, Form, Item, Label, Input} from 'native-base';
import {Header} from "../../Layouts";
import StarRating from 'react-native-star-rating';
import {View, Alert} from "react-native";
import {styles} from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: 0,
            repas: 0,
            restaurant: 0,
            showAlert: false
        };
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

    onStarRatingPress(rating, service) {
        switch(service){
            case 'Service':
                return this.setState({
                    service: rating
                });
            case 'Repas':
                return this.setState({
                    repas: rating
                });
            case 'Restaurant':
                return this.setState({
                    restaurant: rating
                });
            default:
                return null;
        }

    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text style={styles.text}>Note du service</Text>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.service}
                        containerStyle={styles.starsContainer}
                        buttonStyle={styles.stars}
                        emptyStarColor="#ffbb00"
                        fullStarColor="#ffbb00"
                        selectedStar={(rating) => this.onStarRatingPress(rating, 'Service')}
                    />
                    <Text style={styles.text}>Note de votre repas</Text>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.repas}
                        containerStyle={styles.starsContainer}
                        buttonStyle={styles.stars}
                        emptyStarColor="#ffbb00"
                        fullStarColor="#ffbb00"
                        selectedStar={(rating) => this.onStarRatingPress(rating, 'Repas')}
                    />
                    <Text style={styles.text}>Note du restaurant</Text>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.restaurant}
                        containerStyle={styles.starsLastContainer}
                        buttonStyle={styles.stars}
                        emptyStarColor="#ffbb00"
                        fullStarColor="#ffbb00"
                        selectedStar={(rating) => this.onStarRatingPress(rating, 'Restaurant')}
                    />
                    <Form style={styles.form}>
                        <Item stackedLabel>
                            <Label>Email (optionnel)</Label>
                            <Input
                            type="email"/>
                        </Item>
                    </Form>
                    <Button full info style={styles.btn} onPress={() => this.showAlert()}>
                        <Text>Valider</Text>
                    </Button>
                    <Button full danger style={styles.btn} onPress={() => {
                        return this.setState({
                            showAlert: false
                        }, () => {
                            this.props.navigation.navigate("Orders")
                        })
                    }}>
                        <Text>Annuler</Text>
                    </Button>
                    <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={false}
                        title="Valider l'évaluation pour la Table 1"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="Annuler"
                        confirmText="Confirmer"
                        confirmButtonColor="#2E7D32"
                        titleStyle={styles.alert}
                        messageStyle={styles.alert}
                        cancelButtonColor="#212121"
                        onCancelPressed={() => {
                            this.hideAlert();
                        }}
                        onConfirmPressed={() => {
                            return this.setState({
                                showAlert: false
                            }, () => {
                                this.props.navigation.navigate("Orders")
                            })
                        }}
                    />
                </View>
            </Container>
        );
    }
}