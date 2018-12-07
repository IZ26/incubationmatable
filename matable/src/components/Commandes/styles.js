import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        height: Dimensions.get('window').height,
    },
    alert:{
        textAlign: "center",
        margin: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});