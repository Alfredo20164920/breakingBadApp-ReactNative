import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainParams } from '../../navigators/MainNavigator'
import { colors } from '../../theme/BaseTheme'

interface Props extends NativeStackScreenProps<MainParams, 'CharacterProfile'>{}

const Component = (props: Props) => {

    const {
        route: {params: character}
    } = props

    const {
        name,
        nickname,
        img,
        status,
        birthday,
        occupation,
        portrayed,
    } = character

    const extraData = [
        {key: status},
        {key: `Born in ${birthday}`},
        {key: `Ocuppation: ${occupation.join(', ')}`},
        {key: `Performed by: ${portrayed}`}
    ]

    console.log(status);

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.Image}
                    source={{
                        uri: img,
                    }}
                >

                </Image>
            </View>

            <View style={styles.DataContainer}>
                <Text style={styles.Name}>{name}</Text>
                <Text style={styles.NickName}>{nickname}</Text>
                <FlatList 
                    style={styles.DataList}
                    data={extraData}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.ListItem}>
                                <Text style={styles.ListItemText}>{item.key}</Text>
                            </View>
                        );
                    }}
                >
                    
                </FlatList>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container:{
        alignContent: 'center',
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: 30,
    },
    ImageContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 0.2,
        height: '100%',
        justifyContent: 'center',
    },
    Image: {
        borderRadius: 200,
        borderColor: colors.white,
        borderWidth: 1,
        height: 200,
        width: 200
    },
    DataContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 70,
        width: '100%',
    },
    Name: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    NickName: {
        color: colors.red,
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    DataList: {
        marginTop: 20,
    },
    ListItem: {
        alignItems: 'center',
        padding: 10,
    },
    ListItemText: { 
        color: colors.white,
        fontSize: 15,
        letterSpacing: 2,
    }
})

export default Component
