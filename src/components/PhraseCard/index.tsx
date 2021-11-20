import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements';
import { PhraseInterface } from '../../interfaces/interfaces'

interface Props{
    phrase: PhraseInterface;
    onClick: () => void;
}

const Component = (props: Props) => {
    const { phrase, onClick } = props;
    const {id, author, quote, series} = phrase;
    return (
        <View>
            <TouchableOpacity
                onPress={() => onClick()} 
            >
                <Text>{quote}</Text>
                <Text>{author}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Component
