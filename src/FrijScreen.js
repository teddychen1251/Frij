import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

class FrijScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {organization: 'Loading...'};
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

    render() {
        return (
            <View style = {{flexDirection: 'column', flex:1}}>
              <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingVertical : 10}}>
                <Text style={{marginLeft : '33%', marginRight : '33%'}}>{this.state.organization}</Text>
              </View>
              <View style = {{flexDirection: 'column', flex : 1}}>
                  <ScrollView>
                    <View style = {{flexDirection: 'row', flex: 1, flexWrap: 'wrap'}}>
                    </View>
                  </ScrollView>

              </View>
            </View>
        )
    }
}

export default FrijScreen;
