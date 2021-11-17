import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CharacterInterface } from '../../interfaces/interfaces'
import { colors } from '../../theme/BaseTheme'

interface Props{
    character: CharacterInterface;
}

const Component = (props: Props) => {

    const { character } = props;
    const {name} = character


    return (
        <View style={styles.Container}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.primary,
        height: 100,
        borderWidth: 0.5,
        borderColor: colors.secondary
    }
})

export default Component
