import React, { Component } from 'react';
import { View, ScrollView, Image} from "react-native";
import colors from '../../../../assets/colors/Colors';
import LinearGradient from 'react-native-linear-gradient';

class VerticalListItem extends Component {

  constructor(props) {
      super(props);
  }

  image = () => {
    let image = this.props.data.image; 

    if(image === 'img/ic_yoga.png'){
      return <Image source={require('../../../../assets/img/ic_yoga.png')} />;
    }else if(image === 'img/ic_upper_body.png'){
      return <Image source={require('../../../../assets/img/ic_upper_body.png')} />;
    }else if(image === 'img/ic_lower_body.png'){
      return <Image source={require('../../../../assets/img/ic_lower_body.png')} />;
    }else if(image === 'img/ic_dance.png'){
      return <Image source={require('../../../../assets/img/ic_dance.png')} />
    }

  }

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <LinearGradient style={{ 
                width: 60, 
                height: 60, 
                borderRadius: 100/2, 
                marginTop: 15, 
                marginLeft: 20, 
                justifyContent: 'center', 
                alignItems: 'center'}} 
                colors={[colors.gradient_start, colors.gradient_end]}>
            
            {this.image()}
        </LinearGradient>              

      </ScrollView>
    );
  }
};

export default VerticalListItem;