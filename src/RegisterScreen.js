import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from 'react-native';

import Axios from 'axios';

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
                style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                placeholder = "Organization:"
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
                onChangeText={(organization) => this.setState(previousState => {
                    return {
                        ...previousState, 
                        organization
                    }
                })}
              />
              <TextInput
                style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                placeholder = "Name:"
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
                onChangeText={(name) => this.setState(previousState => {
                    return {
                        ...previousState,
                        name
                    }
                })}
            />
              <TextInput
                style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                placeholder = "Email account:"
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
                onChangeText={(email) => this.setState(previousState => {
                    return {
                        ...previousState, 
                        email
                    }
                })}
              />
              <TextInput
                style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                placeholder = "Create password:"
                secureTextEntry = 'true'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
                onChangeText={(password) => this.setState(previousState => {
                    return {
                        ...previousState, 
                        password
                    }
                })}
              />
              <TextInput
                style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                placeholder = "Verify password:"
                secureTextEntry = 'true'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
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
            Axios.post('http://localhost:5000/api/users', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                organization: this.state.organization
            })
            .then(response => {
                console.log(response.data.token)
                this.props.navigation.navigate('Login');
            })
            .catch(error => console.log(error.response));

        } else {
            alert('Passwords do not match');
        }
    }
}

export default RegisterScreen;
