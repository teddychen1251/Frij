import React from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>frij</Text>
                <Button
                    title='Register'
                    onPress={() => {
                        navigate('Register')
                    }}
                />
                <Button
                    title='Login'
                    onPress={() => {
                        navigate('Login')
                    }}
                />
            </View>
        )
    }
}

export default HomeScreen;