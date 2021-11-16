import { StyleSheet } from "react-native";

export const colors = {
    primary: '#282C34',
    white: '#fff',
    blue: '#06BEE1'
}
export const baseStyle = StyleSheet.create({
    Title: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 4,
    }
})