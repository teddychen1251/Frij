import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput, Text, View } from 'react-native';

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

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={{justifyContent: 'center'}}>
              <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
              </View>
              <TextInput
                style={{marginLeft : '36%', marginRight : '33%', height: 40}}
                placeholder = "Enter your email!"
              />
              <TextInput
                style={{marginLeft : '33%', marginRight : '33%', height: 40}}
                placeholder = "Enter your password!"
              />
              <View style = {{marginHorizontal : '30%', paddingVertical: 10, justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => {
                          navigate('Frij')
                      }}
                >
                  <Text style = {styles.TextStyle}> Login </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        );
    }
}




export default LoginScreen;
