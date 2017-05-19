import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Dimensions,
} from 'react-native';

let screen = {
    w: Dimensions.get('window').width,
    h: Dimensions.get('window').height,
    minLength: () => screen.w <= screen.h ? screen.w : screen.h,
};

const styles = StyleSheet.create({
    fill:{
        flex: 1,
        flexDirection: 'column'
    },
    input: {
        width: screen.minLength() - 20
    }
});

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    render() {
        return <View >
            <TextInput style={[styles.input]} value={this.state.username} keyboardType="email-address" placeholder="Username" />
            <TextInput style={[styles.input]} value={this.state.password} keyboardType="default" secureTextEntry={true} placeholder="Password" />
        </View>;
    }
}