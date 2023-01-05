import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import inAppMessaging from '@react-native-firebase/in-app-messaging';
import firestore from '@react-native-firebase/firestore'

async function bootstrap() {
  await inAppMessaging().setMessagesDisplaySuppressed(true);
}
async function onSetup(user) {
  await setupUser(user);
  inAppMessaging().setMessagesDisplaySuppressed(false);
}

const HomeScreen = () => {
  
  const getUsers = async () => {
    const users = await firestore().collection('Users').get();
    // const user = await firestore().collection('Users').doc('')
    console.log(users);
  }
  
  useEffect(() => {
    // bootstrap()
    getUsers();
  },[])

  return (
    <View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})