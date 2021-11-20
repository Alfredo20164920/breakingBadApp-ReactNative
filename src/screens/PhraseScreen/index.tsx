import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import breakinBadApi from '../../api/breakingBadApi';
import PhraseCard from '../../components/PhraseCard';
import { PhraseInterface } from '../../interfaces/interfaces'

const Component = () => {

    const [phrases, setPhrases] = useState<[PhraseInterface] | null>(
        null,
    );

    const getRandomQuote = async () => {
        const {data} = await breakinBadApi.get<[PhraseInterface]>(
            '/quote/random'
        );
        setPhrases(data);
    }

    useEffect(() => {
        getRandomQuote()
    }, []);

    const changePhrase = () => {
        getRandomQuote()
    }

    const renderPhrase = phrases?.map((quote, index) => {
        return <PhraseCard phrase={quote} onClick={changePhrase}/>
    })
    return (
        <View>
            {renderPhrase}
        </View>
    )
}

export default Component
