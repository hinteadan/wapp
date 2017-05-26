import React, { Component } from 'react';
import axios from 'axios';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Dimensions,
    Alert,
} from 'react-native';

let screen = {
    w: Dimensions.get('window').width,
    h: Dimensions.get('window').height,
    minLength: () => screen.w <= screen.h ? screen.w : screen.h,
};

const styles = StyleSheet.create({
    fill: {
        flex: 1,
        flexDirection: 'column'
    },
    input: {
        width: screen.minLength() - 20
    }
});

class LoginService {
    static authenticate(username, password) {
        return new Promise((yey, ney) => {
            var xhr = axios.create({
                baseURL: 'http://hintea-pc.thor.recognos.ro:9969',
                timeout: 3000,
            });
            xhr
                .post('/auth', { user: username, pass: password })
                .then(x => {
                    yey(`${username} successfully authenticated!`);
                }, x => {
                    ney(x);
                })
                .catch(x => {
                    console.log(x);
                    ney(x);
                });
        });
    }
}

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            isAuthing: false,
            loginLabel: 'Login'
        };
    }
    render() {
        return <View >
            <TextInput style={[styles.input]} value={this.state.username} onChangeText={x => this.setState({ username: x })} keyboardType="email-address" placeholder="Username" />
            <TextInput style={[styles.input]} value={this.state.password} onChangeText={x => this.setState({ password: x })} keyboardType="default" secureTextEntry={true} placeholder="Password" />
            <Button onPress={() => this.login()} title={this.state.loginLabel} accessibilityLabel="Login using the provided username and password" disabled={this.state.isAuthing} />
        </View>;
    }
    login() {
        this.setState({ isAuthing: true, loginLabel: 'Authing...' });
        LoginService
            .authenticate(this.state.username, this.state.password)
            .then(res => Alert.alert('Login', res), _ => Alert.alert('Invalid Login', 'Wrong user/pass'))
            .finally(_ => { this.setState({ isAuthing: false, loginLabel: 'Login' }); });
        ;
    }
}