import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/auth/AuthContext'

const ProtectedScreen = () => {
  const { logOut, token, user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProtectedScreen</Text>
      <Button color="#5856d6" onPress={logOut} title="Logout" />
      <Text>{JSON.stringify(user, null, 5)}</Text>
      <Text>{token}</Text>
    </View>
  )
}

export default ProtectedScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  }
})
