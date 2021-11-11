import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigators/MainNavigator';

//interface Props extends NativeStackScreenProps<any, any>{}

///props: Props

export const App = () => {
  //const {navigation} = props

  // useEffect(() => {
  //   setTimeout( () => {
  //    navigation.navigate("Login");
  //   }, 3000)
  // }, [])

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App;