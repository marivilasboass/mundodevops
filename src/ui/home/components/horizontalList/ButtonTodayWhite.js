import React, { Component } from 'react';
import styles from './HorizontalListStyle';
import {Text, Button } from 'native-base';

class ButtonTodayWhite extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button disabled bordered style={styles.button}>
            <Text style={styles.fontButton}>HOJE</Text>
        </Button>      
    );
  }
};

export default ButtonTodayWhite;