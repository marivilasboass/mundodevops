import React, {Component} from 'react';
import { View } from "react-native";
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component{

    static navigationOptions = {
        header: null 
    };
    
    constructor(props) {
        super(props);
        
        setTimeout(()=>{
            Actions.reset("home");
        },1000);
     
    }

    render(){

        console.disableYellowBox = true;

        return (
            <View>

            </View>
        );
    }
}

