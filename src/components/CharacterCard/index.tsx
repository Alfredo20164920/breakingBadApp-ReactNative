import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { CharacterInterface } from '../../interfaces/interfaces'
import { colors } from '../../theme/BaseTheme'

interface Props{
    character: CharacterInterface;
    onClick: (character: CharacterInterface) => void;
}

const Component = (props: Props) => {

    const { character, onClick } = props;
    const {name, img, nickname, status} = character;


    let imgStatus = '';
    let colorImgStatus = ''

    switch (status) {
        case 'Alive':
            imgStatus = 'heart'
            colorImgStatus = colors.red
            break;
        case 'Deceased':
            imgStatus= 'heart-dislike-outline'
            colorImgStatus = colors.blue
            break;
    
        default:
            imgStatus = 'help'
            colorImgStatus = colors.white
            break;
    }


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

                <View style={styles.StatusContainer}>
                    <View style={styles.InformationContainer}>
                        <Icon
                            name={imgStatus}
                            type='ionicon' 
                            color={colorImgStatus}
                            tvParallaxProperties={undefined}
                        />
                    </View>
                </View> 
            </>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        padding: 20,
        width: '100%',
        borderTopWidth: 0.2,
        borderColor: '#f2f2f2',
        justifyContent:'space-between'
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
    },
    InformationContainer: {
        justifyContent: 'center'
    },
    Name: {
        color: colors.white,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 16
    },
    NickName: {
        color: colors.blue,
        fontWeight: '100'
    },
    StatusContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Component
