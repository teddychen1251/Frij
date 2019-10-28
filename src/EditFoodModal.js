import React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
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

class EditFoodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  amount: '0',
                  price: '',
                  expDate: new Date().toISOString().substring(0, 10)
                  };
  }
  static navigationOptions = {
      title: 'Remove food'
  };



  render() {
      return (
          <View style={{flexDirection : 'column', flex: 1, justifyContent: 'center'}}>
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                  <TouchableOpacity
                    style = {styles.ButtonStyle}
                    activeOpacity = { .5 }
                    onPress={() => {
                      if (parseInt(this.state.amount) > parseInt(this.props.navigation.getParam('removePrice', Number.MAX_SAFE_INTEGER)) || parseInt(this.state.amount) < 0) {
                        alert('Please fill all fields with valid data!');
                      } else {
                        this.handleAddItems();
                        this.props.navigation.goBack();
                      }
                    }}
                  >
                    <Text style = {styles.TextStyle}> Remove Food </Text>
                  </TouchableOpacity>
                </View>
                <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                  <TouchableOpacity
                    style = {styles.ButtonStyle}
                    activeOpacity = { .5 }
                    onPress={() => this.props.navigation.navigate('Main')}
                  >
                    <Text style = {styles.TextStyle}> Exit </Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
      )
  }
  handleAddItems() {
    AsyncStorage.getItem('@User_token').then(response => {
      Axios.delete('https://frij-api.herokuapp.com/api/storage/items/' + this.props.navigation.getParam('id'), {
        headers : {
          'x-auth-token' : response
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        alert(error.response.data.errors[0].msg)
      });
  });
 }
}

export default EditFoodModal;
