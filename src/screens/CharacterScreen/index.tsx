import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import breakinBadApi from '../../api/breakingBadApi'
import CharacterCard from '../../components/CharacterCard'
import { CharacterInterface } from '../../interfaces/interfaces'

const Component = () => {

    const [characters, setCharacters] = useState< [CharacterInterface] | null >(
        null,
    );

    const getCharacters = async() => {
        const { data } = await breakinBadApi.get<[CharacterInterface]>(
            '/characters'
        );
        setCharacters(data);
    }

    useEffect(() => {
        getCharacters()
    }, []);

    const onSelectCharacter = (character: CharacterInterface) => {
        console.log(character.name);
    }

    const renderCharacters = characters?.map((character, index, ) => {
        return <CharacterCard 
            key={`character-${index}`} 
            character={character}
            onClick={onSelectCharacter}
            />
    })

    return (
        <ScrollView>
            {renderCharacters}
        </ScrollView>
    )
}

export default Component
