import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import breakinBadApi from '../../api/breakingBadApi'

const Component = () => {

    const getCharacters = async() => {

        const response = await breakinBadApi.get('/characters')

        console.log(response.data);
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <View>
            <Text> Character Screen </Text>
        </View>
    )
}

export default Component
