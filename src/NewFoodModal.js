import React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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

class NewFoodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ti1: "",
                  ti2: "",
                  ti3: "",
                  ti4: new Date().toISOString().substring(0, 10)
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
                    id="ti1"
                    style={style.TextInputStyle}
                    placeholder = "Food to add"
                    placeholderTextColor='#888'
                    onChangeText = {(ti1) => this.setState({ti1})}
                  />
                  <TextInput
                    id="ti2"
                    style={style.TextInputStyle}
                    placeholder = "Amount to add"
                    placeholderTextColor='#888'
                    onChangeText = {(ti2) => this.setState({ti2})}
                  />
                  <TextInput
                    id="ti3"
                    style={style.TextInputStyle}
                    placeholder = "$ Price per unit"
                    placeholderTextColor='#888'
                    onChangeText = {(ti3) => this.setState({ti3})}
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
                    onChangeText={(ti4) => this.setState({ti4: ti4.toISOString().substring(0, 10)})}
                />
                  <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                    <TouchableOpacity
                      style = {styles.ButtonStyle}
                      activeOpacity = { .5 }
                      onPress={() => {
                        if (this.state.ti1 == "" || this.state.ti2 == "" || this.state.ti3 == "" || this.state.ti4 == "") {
                          alert('Please complete all fields!');
                        } else {
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
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <Text style = {styles.TextStyle}> Exit </Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
        )
    }
}

export default NewFoodModal;
