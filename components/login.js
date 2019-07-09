import { Actions } from 'react-native-router-flux'
import React, { Component } from 'react'
import {Text} from 'react-native'
export default class Login extends Component {
    render() {
        let text = '我是login组件传递的参数'
        return (
            <Text onPress={() =>Actions.home({text})}>登陆页</Text>
        )
    }
}
