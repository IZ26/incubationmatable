import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#220108"
    },
    form:{
        width: Dimensions.get('window').width * 0.9,
        marginTop: 5,
    },
    img: {
        marginBottom: 20
    }
});