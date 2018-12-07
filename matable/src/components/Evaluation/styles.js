import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        marginBottom: 5
    },
    textList:{
        fontSize: 18,
    },
    textListLastChild:{
        fontSize: 18,
        marginBottom: 30
    },
    btn:{
        marginTop: 20
    },
    starsContainer:{
        marginBottom: 15
    },
    starsLastContainer:{
        marginBottom: 0
    },
    stars:{
        marginRight: 5,
        marginLeft: 5
    },
    form:{
        width: Dimensions.get('window').width,
        marginTop: 5
    },
    alert:{
        textAlign: "center",
        margin: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});