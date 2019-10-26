import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

class FrijScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
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

    render() {
        return (
            <View style = {{flexDirection: 'column', flex:1}}>
              <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingVertical : 10}}>
                <Text style={{marginLeft : '33%', marginRight : '33%'}}>Organization</Text>
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
