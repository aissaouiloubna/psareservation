import React, { Component } from 'react'
import {StyleSheet,Text, View,} from 'react-native';
import  './variableglobale'

export default class test extends Component {
   
    render() {

        return (
            <Text> { global.name} </Text>
        )
    }
}
