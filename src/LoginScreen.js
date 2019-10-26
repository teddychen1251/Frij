import React from 'react';
import { Button, Text, View } from 'react-native';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>login</Text>
                <Button
                    title='Login'
                    onPress={() => {
                        navigate('Frij');
                    }}
                />
            </View>
        )
    }
}

export default LoginScreen;