import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

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

class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style = {{padding: 70, alignItems: 'center'}}>
                <Image source = {require('./assets/frijlogo.png')}/>
              </View>
              <View style = {{paddingVeritcal: 10, justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => {
                          navigate('Register')
                      }}
                >
                  <Text style = {styles.TextStyle}> Register </Text>
                </TouchableOpacity>
              </View>
              <View style = {{paddingVertical: 10, justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => {
                          navigate('Login')
                      }}
                >
                  <Text style = {styles.TextStyle}> Login </Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }
}

export default HomeScreen;
