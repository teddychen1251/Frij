import React from 'react';
import { Text, View, Button } from 'react-native';

class NewFoodModal extends React.Component {
    static navigationOptions = {
        title: 'Add Food'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>add food</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Submit'
                />
            </View>
        )
    }
}

export default NewFoodModal;