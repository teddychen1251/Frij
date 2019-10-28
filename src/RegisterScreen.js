import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from 'react-native';

import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  ButtonStyle: {
    padding : 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000'
  },
  TextStyle: {
    color: '#000',
    textAlign: 'center'
  },
  TextInputStyle: {
    marginLeft : '37%',
    marginRight : '25%',
    height: 40,
    color: '#444'
  }
});

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
    };
    state = {
        name: '',
        organization: '',
        email: '',
        password: '',
        verifyPassword: ''
    }
    render() {
        return (
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
            </View>
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Organization:"
                placeholderTextColor='#888'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText={(organization) => this.setState(previousState => {
                    return {
                        ...previousState,
                        organization
                    }
                })}
              />
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Name:"
                placeholderTextColor='#888'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText={(name) => this.setState(previousState => {
                    return {
                        ...previousState,
                        name
                    }
                })}
            />
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Email account:"
                placeholderTextColor='#888'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText={(email) => this.setState(previousState => {
                    return {
                        ...previousState,
                        email
                    }
                })}
              />
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Create password:"
                placeholderTextColor='#888'
                secureTextEntry = {true}
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText={(password) => this.setState(previousState => {
                    return {
                        ...previousState,
                        password
                    }
                })}
              />
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Verify password:"
                placeholderTextColor='#888'
                secureTextEntry = {true}
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText={(verifyPassword) => this.setState(previousState => {
                    return {
                        ...previousState,
                        verifyPassword
                    }
                })}
              />
              <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => this.handleRegister()}
                >
                  <Text style = {styles.TextStyle}> Register </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
    }

    handleRegister() {
        if (this.state.password === this.state.verifyPassword) {
            Axios.post('https://frij-api.herokuapp.com/api/users', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                organization: this.state.organization
            })
            .then(response => {
                AsyncStorage.setItem('@User_token', response.data.token)
                this.props.navigation.navigate('Login');
            })
            .catch(error => {
              console.log(error);
              alert(error.response ? error.response.data.errors[0].msg : 'error occurred')
            });
        } else {
            alert('Passwords do not match');
        }
    }
}

export default RegisterScreen;
