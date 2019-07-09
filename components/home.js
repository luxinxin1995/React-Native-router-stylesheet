import { Actions } from 'react-native-router-flux'
import React, { Component, Fragment } from 'react'
import {
    Text, Dimensions,
    StyleSheet,
    View,
} from 'react-native'
let widthScreen = Dimensions.get('window').width;
let heightScreen = Dimensions.get('window').height;
export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Text onPress={() => Actions.login()}>首页+{this.props.text}</Text>
                <View style={styles.containerStyle}>
                    <View style={styles.borderStyle}></View>
                    <View style={styles.marginStyle} />
                    <Text style={styles.paddingStyle}>内边距</Text>
                    <Text style={[styles.textStyle, styles.fontStyle]}>字体属性</Text>
                    <Text style={[styles.textStyle, styles.shadowStyle]}>阴影属性</Text>
                    <Text style={[styles.textStyle, styles.decorationStyle]}>装饰属性</Text>
                </View>
            </Fragment>
        )
    }
}
var styles = StyleSheet.create({
    containerStyle: {
        width: widthScreen,
        height: heightScreen,

        backgroundColor: "#E6E6FA",
    },
    borderStyle: {
        margin: 20,
        height: 50,

        backgroundColor: 'yellow',

        // solid 实线边框
        borderStyle: "solid",
        borderColor: "#DC143C",
        borderRadius: 10,
        borderLeftColor: "green",
        borderTopWidth: 1,
        borderLeftWidth: 3,
        borderRightWidth: 2,
        borderBottomWidth: 5,
    },
    marginStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 20,

        height: 30,

        backgroundColor: 'green',
    },
    paddingStyle: {
        height: 50,

        padding: 10,
        backgroundColor: "brown",
    },
    textStyle: {
        margin: 10,
        height: 40,

        backgroundColor: '#FFF0F5',
    },
    fontStyle: {
        fontSize: 20,
        fontStyle: 'italic', // normal,italic,oblique
        fontWeight: 'bold', // normal,bold,100~900
        color: "red",
        textAlign: 'center', // center,left,right
        lineHeight: 40,

        letterSpacing: 5,
    },
    shadowStyle: {
        // 文字阴影偏移
        textShadowOffset: { width: 10, height: 10 },
        // 文字阴影颜色
        textShadowColor: 'black',
        // 文字阴影圆角的大小
        textShadowRadius: 1.5,
    },
    decorationStyle: {
        // 'none', 'underline', 'line-through', 'underline line-through'
        textDecorationLine: 'underline',
        // 'solid', 'double', 'dotted', 'dashed'
        textDecorationStyle: 'solid',
        textDecorationColor: 'blue',
    }

});