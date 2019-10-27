import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput, Text, View } from 'react-native';
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
    marginLeft : '33%', 
    marginRight : '29%', 
    height: 40,
    color: '#444'
  }
});

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };
    state = {
        email: '',
        password: ''
    }
    render() {
        return (
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{justifyContent: 'center'}}>
              <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
              </View>
              <TextInput
                style={{...styles.TextInputStyle, justifyContent: 'center'}}
                placeholder = "Enter your email!"
                placeholderTextColor='#888'
                onChangeText={(email) => this.setState(previousState => {
                    return {
                        ...previousState,
                        email
                    }
                })}
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
              />
              <TextInput
                style={styles.TextInputStyle}
                placeholder = "Enter your password!"
                placeholderTextColor='#888'
                onChangeText={(password) => this.setState(previousState => {
                    return {
                        ...previousState,
                        password
                    }
                })}
                secureTextEntry = {true}
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = {false}
              />
              <View style = {{marginHorizontal : '30%', paddingVertical: 20, justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => this.handleLogin()}
                >
                  <Text style = {styles.TextStyle}> Login </Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: 70, flex : 1, alignItems: "center", justifyContent: "center"}}>
                <Image source = {require('./assets/refrigerator.png')}  style={{width: '400%', height: '400%'}} resizeMode = "contain"/>
              </View>
            </View>
            <View style = {{height : 30}}>
            </View>
          </KeyboardAvoidingView>
        );
    }
    handleLogin() {
      Axios.post('http://localhost:5000/api/auth', {
          email: this.state.email,
          password: this.state.password
      })
      .then(response => {
          AsyncStorage.setItem('@User_token', response.data.token);
          this.props.navigation.navigate('Frij');
      })
      .catch(error => alert(error.response ? error.response.data.errors[0].msg : 'error occurred'));
  }
}


export default LoginScreen;
