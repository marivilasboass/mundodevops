import React, { Component } from 'react';
import styles from './HorizontalListStyle';
import {Text, Button } from 'native-base';

class ButtonTodayRed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button disabled bordered style={styles.button}>
            <Text style={styles.fontButton}>ONTEM</Text>
        </Button>      
    );
  }
};

export default ButtonTodayRed;