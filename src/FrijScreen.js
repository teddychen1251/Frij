import React from 'react';
import { Text, View, Button } from 'react-native';

class FrijScreen extends React.Component {
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>foods</Text>
            </View>
        )
    }
}

export default FrijScreen;