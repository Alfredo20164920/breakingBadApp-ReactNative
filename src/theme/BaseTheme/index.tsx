import { StyleSheet } from "react-native";

export const colors = {
    white: '#fff',
    primary: '#282C34',
    secondary: '#d7370',
    blue: '#06BEE1',
    red: '#f02849',
    purple: '#8a079e',
}
export const baseStyle = StyleSheet.create({
    Title: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 4,
    }
})