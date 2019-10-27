import React from 'react';
import { Image, ScrollView, Text, View, Button } from 'react-native';

import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class FrijScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {inventory : [], organization: 'Loading...'};
      this.willFocus = props.navigation.addListener(
        'willFocus',
        () => {
          setTimeout(() => {
            this.handleDisplayItems()
            console.log(this.state)
          }, 250)
        }
      );
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Your Frij',
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('FoodModal')}
                    title='+'
                    color='#f00'
                />
            )
        };
    };
    componentDidMount() {
        AsyncStorage.getItem('@User_token').then(token => {
            Axios.get('http://localhost:5000/api/users', {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => this.setState({organization: response.data.organization}))
            .catch(error => console.log(error.response));
        })
    }

    componentDidMount = () => {
      this.handleDisplayItems();
    }

    render() {
      if (typeof this.state.inventory !== 'undefined') {
        return (
            <View style = {{flexDirection : 'column'}}>
            <View style = {{paddingVertical : 10}}>
              <Button
                title="What's my food waste today?"
                onPress = {() => this.props.navigation.navigate('FoodWaste')}
              />
            </View>
            <View style = {{width: undefined, height : '80%'}}>
            <ScrollView>
            {
              this.state.inventory.map(entry => {
                  switch (entry.name) {
                    case "apple":
                      return <View style={{flexDirection: 'row', borderColor: '#000', borderWidth: 2, width: 350, paddingHorizontal: 20, marginLeft: 32}}>
                              <View>
                                <Image source = {require('./assets/apple.png')} style = {{width: 45, height: 60}} resizeMode = 'contain'/>
                              </View>
                              <View style={{marginTop: 5, marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>{"Name: " + entry.name}</Text>
                                <Text style={{fontSize: 16}}>{"Expiration Date: " + entry.expDate.substring(0,10)}</Text>
                                <Text style={{fontSize: 16}}>{"Price: $" + entry.price}</Text>
                              </View>
                              <View style={{marginLeft: 10, paddingVertical: 15}}>
                                <Button
                                  title="Edit"
                                  onPress={() => {this.props.navigation.navigate('EditFoodModal', {
                                    id : entry._id
                                  });}}
                                />
                              </View>
                            </View>
                    case "banana":
                      return <View style={{flexDirection: 'row', borderColor: '#000', borderWidth: 2, width: 350, paddingHorizontal: 20, marginLeft: 32}}>
                              <View >
                                <Image source = {require('./assets/banana.png')} style = {{width: 45, height: 60}} resizeMode = 'contain'/>
                              </View>
                              <View style={{marginTop: 5, marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>{"Name: " + entry.name}</Text>
                                <Text style={{fontSize: 16}}>{"Expiration Date: " + entry.expDate.substring(0,10)}</Text>
                                <Text style={{fontSize: 16}}>{"Price: $" + entry.price}</Text>
                              </View>
                              <View style={{marginLeft: 10, paddingVertical: 15}}>
                                <Button
                                  title="Edit"
                                  onPress={() => {this.props.navigation.navigate('EditFoodModal', {
                                    id : entry._id
                                  });}}
                                />
                              </View>
                            </View>
                    case "egg":
                      return <View style={{flexDirection: 'row', borderColor: '#000', borderWidth: 2, width: 350, paddingHorizontal: 20, marginLeft: 32}}>
                              <View>
                                <Image source = {require('./assets/egg.png')} style = {{width: 45, height: 60}} resizeMode = 'contain'/>
                              </View>
                              <View style={{marginTop: 5, marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>{"Name: " + entry.name}</Text>
                                <Text style={{fontSize: 16}}>{"Expiration Date: " + entry.expDate.substring(0,10)}</Text>
                                <Text style={{fontSize: 16}}>{"Price: $" + entry.price}</Text>
                              </View>
                              <View style={{marginLeft: 10, paddingVertical: 15}}>
                                <Button
                                  title="Edit"
                                  onPress={() => {this.props.navigation.navigate('EditFoodModal', {
                                    id : entry._id
                                  });}}
                                />
                              </View>
                            </View>
                    case "ham":
                      return <View style={{flexDirection: 'row', borderColor: '#000', borderWidth: 2, width: 350, paddingHorizontal: 20, marginLeft: 32}}>
                              <View>
                                <Image source = {require('./assets/ham.png')} style = {{width: 45, height: 60}} resizeMode = 'contain'/>
                              </View>
                              <View style={{marginTop: 5, marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>{"Name: " + entry.name}</Text>
                                <Text style={{fontSize: 16}}>{"Expiration Date: " + entry.expDate.substring(0,10)}</Text>
                                <Text style={{fontSize: 16}}>{"Price: $" + entry.price}</Text>
                              </View>
                              <View style={{marginLeft: 10, paddingVertical: 15}}>
                                <Button
                                  title="Edit"
                                  onPress={() => {this.props.navigation.navigate('EditFoodModal', {
                                    id : entry._id
                                  });}}
                                />
                              </View>
                            </View>
                    default:
                      return <View style={{flexDirection: 'row', borderColor: '#000', borderWidth: 2, width: 350, paddingHorizontal: 20, marginLeft: 32}}>
                              <View>
                                <Image source = {require('./assets/lobster.png')} style = {{width: 45, height: 60}} resizeMode = 'contain'/>
                              </View>
                              <View style={{marginTop: 5, marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>{"Name: " + entry.name}</Text>
                                <Text style={{fontSize: 16}}>{"Expiration Date: " + entry.expDate.substring(0,10)}</Text>
                                <Text style={{fontSize: 16}}>{"Price: $" + entry.price}</Text>
                              </View>
                              <View style={{marginLeft: 10, paddingVertical: 15}}>
                                <Button
                                  title="Edit"
                                  onPress={() => {this.props.navigation.navigate('EditFoodModal', {
                                    id : entry._id
                                  });}}
                                />
                              </View>
                            </View>
                  }
                })
            }
            </ScrollView>
            </View>
            <View style = {{paddingVertical : 5}}>
              <Button
                title="Remove multiple"
                onPress = {() => this.props.navigation.navigate('RemoveMultiple')}
              />
            </View>
            </View>
        )
      } else {
        return null;
      }
    }

    handleDisplayItems = () => {
      AsyncStorage.getItem('@User_token').then(response => {
        Axios.get('http://localhost:5000/api/storage/', {
          headers : {
            'x-auth-token' : response
          }
        })
        .then(arr => {
            this.setState({inventory: arr.data.inventory})
        })
        .catch(error => {
          alert(error.response.data.errors[0].msg)
        });
    });
  }
}

export default FrijScreen;
