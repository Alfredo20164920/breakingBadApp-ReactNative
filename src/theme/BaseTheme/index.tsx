import { StyleSheet } from "react-native";

export const colors = {
    white: '#fff',
    primary: '#282C34',
    secondary: '#d7370',
    blue: '#06BEE1',
    red: '#f02849',
    purple: '#3626A7',
    gray_797: '#797B84',
    black: '#000',
    black_0A0: '#0A090C'
}
export const baseStyle = StyleSheet.create({
    Title: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 4,
    }
})