import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { baseStyle, colors } from '../../theme/BaseTheme'

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {

    const {navigation} = props

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    useEffect( () => {
        console.log('Email: -> ' + email);
        console.log('Password: -> ' + pass);
    }, [email, pass] );

    const doLogin= () => {
        if(! (email === '1' && pass === '1') ){
            navigation.navigate('Home')
        }
    }

    const onSubmit = () => {
        console.log(`Sus datos de acceso son: email ${email} password: ${pass}`);
    }

    return (
        <View style={styles.Container}>
            <Text style={baseStyle.Title}>LoginScreen</Text>
            <TextInput  placeholder='Your email' maxLength={40} style={styles.Input} onChangeText={setEmail}/>
            <TextInput  placeholder='Your password' maxLength={20} style={styles.Input} onChangeText={setPass} secureTextEntry />

            <Button title='Login' onPress={doLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        display: 'flex',
        height: '100%',
        justifyContent: 'center'
    },
    Input: {
        borderColor: colors.white,
        borderRadius: 5,
        borderWidth: 0.5,
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    }
})

export default Component
