import React from 'react';
import { Image, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class FoodWaste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  amountLost: '0'
                };
  }
  static navigationOptions = {
      title: 'Food wasted'
  };

  render() {
    return (
      <View style = {{flex : 1, flexDirection: 'column', alignItems: 'center', justifyContent : 'center'}}>
        <View style = {{flex: 1, width: undefined, height: 20}}>
        </View>
        <View style = {{flex: 1, width: undefined, height: 50, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{fontWeight : 'bold', textAlign : 'center'}}>{"Your food waste today resulted in a loss of \n" + this.state.amountLost + " dollars!"}</Text>
        </View>
        <View style = {{flex: 4, height : '60%', width : '100%', alignItems: 'center'}}>
          <Image source = {require('./assets/foodwaste.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
          <View style = {{width : undefined, height : 40}}>
          </View>
          <Button
            title="Ok!"
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View>

      </View>
    )
  }

  handleFoodWaste = () => {
    AsyncStorage.getItem('@User_token').then(response => {
      Axios.get('http://localhost:5000/api/storage/remove_expired', {
        headers : {
          'x-auth-token' : response
        }
      })
      .then(loss => {
        this.setState({amountLost: loss})
      })
      .catch(error => {
        alert(error.response.data.errors[0].msg)
      });
    })
  }
}



export default FoodWaste;
