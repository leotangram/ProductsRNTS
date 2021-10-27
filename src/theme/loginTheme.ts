import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    height: 600,
    justifyContent: 'center',
    marginBottom: 50,
    paddingHorizontal: 30
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  label: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 25
  },
  inputField: {
    color: '#ffffff',
    fontSize: 20
  },
  inputFieldIOS: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    paddingBottom: 4
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    borderColor: '#ffffff',
    borderRadius: 100,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10
  },
  buttonReturn: {
    borderColor: '#ffffff',
    borderRadius: 100,
    borderWidth: 1,
    left: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: 50
  }
})
