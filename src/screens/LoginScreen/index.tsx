import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useForm } from '../../hooks/useForm'
import { LoginInterfece } from '../../interfaces/interfaces'

import * as BaseTheme from '../../theme/BaseTheme'

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {

    const {navigation} = props

    const {email, password, onChange} = useForm<LoginInterfece>({
        email: '',
        password: ''
    })

    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')

    useEffect( () => {
        console.log(`Email: -> ${email}`);
        console.log(`Password : -> ${password}`);
    }, [email, password] );

    const doLogin= () => {
        if(! (email === '1' && password === '1') ) return;
        navigation.navigate('Home')
    }

    const onSubmit = () => {
        console.log(`Sus datos de acceso son: email ${email} password: ${password}`);
    }

    return (
        <View style={styles.Container}>
            <Text style={BaseTheme.baseStyle.Title}>LoginScreen</Text>
            <TextInput  
                value={email as string}
                onChangeText={value => onChange('email', value)}

                placeholder='Email' 
                placeholderTextColor={BaseTheme.colors.white}
                maxLength={40} 
                style={styles.Input} 

            />
            <TextInput  
                value={password as string}
                onChangeText={value => onChange('password', value)} 

                placeholder='Password' 
                placeholderTextColor={BaseTheme.colors.white}
                secureTextEntry={true}
                maxLength={20} 
                style={styles.Input} 
            />

            <TouchableOpacity onPress={doLogin} style={styles.Button}>
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: BaseTheme.colors.primary,
        display: 'flex',
        height: '100%',
        justifyContent: 'center'
    },
    Input: {
        borderColor: BaseTheme.colors.white,
        borderRadius: 5,
        borderWidth: 0.5,
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    Button: {
        width: '60%',
        backgroundColor: BaseTheme.colors.blue,
        borderRadius: 5,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 20,
    }, 
    ButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: BaseTheme.colors.white,
        fontSize: 16
    }
})

export default Component
