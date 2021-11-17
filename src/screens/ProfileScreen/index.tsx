import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { MainParams } from '../../navigators/MainNavigator'

interface Props extends NativeStackScreenProps<MainParams, 'CharacterProfile'>{}

const Component = (props: Props) => {

    const {
        route: {params: character}
    } = props

    const {name} = character

    console.log(name);

    return (
        <View>
            <Text> Profile Screen </Text>
        </View>
    )
}

export default Component
