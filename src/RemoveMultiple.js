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

class RemoveMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  expDate: new Date().toISOString().substring(0, 10),
                  price: ''
                 };
  }

  static navigationOptions = {
      title: 'Remove Multiple'
  };

  render() {
      return (
          <View style={{flexDirection : 'column', flex: 1, justifyContent: 'center'}}>
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <TextInput
                  id="name"
                  style={styles.TextInputStyle}
                  placeholderTextColor='#888'
                  placeholder = "Food to remove"
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = {false}
                  onChangeText = {(name) => this.setState({name})}
                />
                <TextInput
                  id="price"
                  style={styles.TextInputStyle}
                  placeholderTextColor='#888'
                  placeholder = "$ Price per unit"
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = {false}
                  onChangeText = {(price) => this.setState({price})}
                />
                <Text style={{
                    marginLeft : '38%',
                    marginRight : '30%',
                    marginTop: 10,
                    marginBottom : 0,
                    color : '#888',
                    height : 40}}>
                      Expiration Date:
                  </Text>
                <DateTimePicker
                  value={new Date()}
                  minimumDate={new Date()}
                  display='default'
                  onChange={this.setDate}
                  onChangeText={(expDate) => this.setState({expDate: expDate.toISOString().substring(0, 10)})}
              />
                <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                  <TouchableOpacity
                    style = {styles.ButtonStyle}
                    activeOpacity = { .5 }
                    onPress={() => {
                      if (this.state.name === "" || this.state.price === "" || this.state.expDate === "") {
                        alert('Please fill all fields with valid data!');
                      } else {
                        this.handleRemoveMultiple();
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

  handleRemoveMultiple() {
    AsyncStorage.getItem('@User_token').then(response => {
      Axios.delete(`https://frij-api.herokuapp.com/api/storage/allitems`, {
         name: this.state.name,
         expDate: this.state.expDate,
         price: this.state.price
       },
       {
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
    })
  }
}

export default RemoveMultiple;
