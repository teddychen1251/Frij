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
  }
});

class NewFoodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  amount: '0',
                  price: '',
                  expDate: new Date().toISOString().substring(0, 10)
                  };
  }

    static navigationOptions = {
        title: 'Add Food'
    };

    render() {
        return (
            <View style={{flexDirection : 'column', flex: 1, justifyContent: 'center'}}>
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                  <TextInput
                    id="name"
                    style={{marginLeft : '38%', marginRight : '30%', height: 40}}
                    placeholder = "Food to add"
                    autoCompleteType = 'off'
                    autoCapitalize = 'none'
                    autoCorrect = 'false'
                    onChangeText = {(name) => this.setState({name})}
                  />
                  <TextInput
                    id="amount"
                    style={{marginLeft : '38%', marginRight : '30%', height: 40}}
                    placeholder = "Amount to add"
                    autoCompleteType = 'off'
                    autoCapitalize = 'none'
                    autoCorrect = 'false'
                    onChangeText = {(amount) => this.setState({amount})}
                  />
                  <TextInput
                    id="price"
                    style={{marginLeft : '38%', marginRight : '30%', height: 40}}
                    placeholder = "$ Price per unit"
                    autoCompleteType = 'off'
                    autoCapitalize = 'none'
                    autoCorrect = 'false'
                    onChangeText = {(price) => this.setState({price})}
                  />
                  <Text style={{
                      marginLeft : '38%',
                      marginRight : '30%',
                      marginTop: 10,
                      marginBottom : 0,
                      color : '#ccc',
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
                        if (this.state.name === "" || this.state.amount === "0" || this.state.price === "" || this.state.expDate === "") {
                          alert('Please fill all fields with valid data!');
                        } else {
                          this.handleAddItems();
                          this.props.navigation.goBack();
                        }
                      }}
                    >
                      <Text style = {styles.TextStyle}> Add Food </Text>
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
        Axios.post('http://localhost:5000/api/storage/bulk/' + this.state.amount, {
          name: this.state.name,
          expDate: this.state.expDate,
          price: this.state.price
        }, {
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

export default NewFoodModal;
