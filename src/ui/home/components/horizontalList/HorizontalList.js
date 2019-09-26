import React, { Component } from 'react';
import {View, ScrollView, Image} from "react-native";
import styles from './HorizontalListStyle';
import {Left, Right, Text, Body, Button, ListItem } from 'native-base';
import ButtonTodayRed from './ButtonTodayRed';
import ButtonTodayWhite from './ButtonTodayWhite';

import ButtonYesterdayRed from './ButtonYesterdayRed';
import ButtonYesterdayWhite from './ButtonYesterdayWhite';

class HorizontalList extends Component {

  constructor(props) {
    super(props);
  }

  image = () => {
    let image = this.props.data.image; 

    if(image === 'img/running.png'){
      return <Image source={require('../../../../assets/img/running.png')} />;
    }else if(image === 'img/cycling.png'){
      return <Image source={require('../../../../assets/img/cycling.png')} />;
    }else if(image === 'img/bodybuilding.png'){
      return <Image source={require('../../../../assets/img/bodybuilding.png')} />;
    }else if(image === 'img/yoga.png'){
      return <Image source={require('../../../../assets/img/yoga.png')} />;
    }

  }

  name = () => {
    return <Text style={styles.title}>{this.props.data.name}</Text>;
  }

  calories = () => {
    let cal = this.props.data.calories+' Kcal';
    return <Text style={styles.description}>{cal}</Text>;
  }

  time = () => {
    let time = this.props.data.time+' m'; 
    return <Text style={styles.description}>{time}</Text>;
  }

  weight = () => {
    let weight = this.props.data.weight+' kg'; 
    return <Text style={styles.description}>{weight}</Text>;
  }

  colorChangeTodayWhen = () => {
    let color = this.props.data.when;
    if(color === 'today'){
      return <ButtonTodayRed/>
    }else{
      return <ButtonTodayWhite/>
    }
  }

  colorChangeYesterdayWhen = () => {
    let color = this.props.data.when;
    if(color === 'yesterday'){
      return <ButtonYesterdayRed/>
    }else {
      return <ButtonYesterdayWhite/>
    }
  }

  render() {
    return (
      <View style={styles.root}>
      <View style={styles.exercises}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <ListItem>
              <Left>
                <View style={styles.circle}>
                  
                  {this.image()}

                </View>
              </Left>
              <Body>
                  {this.name()}
                <View style={styles.rightView}>
                  <Image source={require('../../../../assets/img/ic_bike.png')}/>
                  <Text style={styles.description}>{this.calories()}</Text>
                  <View style={styles.view} />
                  <Image source={require('../../../../assets/img/ic_time.png')}/>
                  <Text style={styles.description}>{this.time()}</Text>
                  <View style={styles.view} />
                  <Image source={require('../../../../assets/img/ic_balance.png')}/>
                  <Text style={styles.description}>{this.weight()}</Text>
                </View>

                <View style={styles.rightView}>

                  {this.colorChangeTodayWhen()}
                  {this.colorChangeYesterdayWhen()}
                  
                </View>
              </Body>
              <Right/>
            </ListItem>
          </View>
        </ScrollView>
      </View>   
      </View>   
    );
  }
};

export default HorizontalList;