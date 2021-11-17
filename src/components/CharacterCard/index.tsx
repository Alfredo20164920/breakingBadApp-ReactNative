import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CharacterInterface } from '../../interfaces/interfaces'
import { colors } from '../../theme/BaseTheme'

interface Props{
    character: CharacterInterface;
    onClick: (character: CharacterInterface) => void;
}

const Component = (props: Props) => {

    const { character, onClick } = props;
    const {name, img, nickname} = character


    return (

        <TouchableOpacity 
        style={styles.Container} 
        onPress={() => onClick(character)}
        >
            <>
                <View style={styles.ImageContainer}>
                    <Image
                        style={styles.Image}
                        source={{uri: img,}}
                    >
                        
                    </Image>
                </View>
                <View style={styles.DataContainer}>
                    <View style={styles.InformationContainer}>
                        <Text style={styles.Name}>{name}</Text>
                        <Text style={styles.NickName}>{nickname}</Text>
                    </View>
                </View>
            </>
        </TouchableOpacity>

        // <View style={styles.Container}>
        //     <Text>{name}</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.gray_797,
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        padding: 20,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#f2f2f2'
    },
    ImageContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 0.2,
        height: '100%',
        justifyContent: 'center'
    },
    Image: {
        borderRadius: 100,
        height: '100%',
        width: '100%',
    },
    DataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.7,
        paddingHorizontal: 10,
    },
    InformationContainer: {
        justifyContent: 'center'
    },
    Name: {
        color: colors.black_0A0,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingVertical: 5,
        fontSize: 16
    },
    NickName: {
        color: colors.white,
        fontWeight: '100'
    }
})

export default Component
