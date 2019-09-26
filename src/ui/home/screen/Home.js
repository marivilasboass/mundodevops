
import React, {Component} from 'react';
import { View, FlatList, ScrollView, Image} from "react-native";
import styles from './HomeStyle';
import { Header, Title, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import VerticalList from '../components/verticalList/VerticalList';
import HorizontalList from '../components/horizontalList/HorizontalList';
import constantsAPI from '../../../constantsApi/ConstantsApi';
import colors from '../../../assets/colors/Colors';

export default class HomeScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            listFilter: [],
            listExercice: []
        };

        let url = constantsAPI.BASE_URL+constantsAPI.LIST_FILTER;

        fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((response) => {
        if (response.error) {
            console.log("response error:");
            console.log(response.error);
                        
        } else {

            let state = this.state;
            state.listFilter = response.filters;
            state.listExercice = response.exercices;
            this.setState(state);
            this.setState({
                show: false
            });
            console.log("api_log_filter");
            console.log(response.filters);

        }})
        .catch(() => {})
        .done()
    }
    
    render() {

        console.disableYellowBox = true;
                
                return (

                    <View style={styles.root}>
                        <Header style={styles.header}> 
                            <Left>
                                <Button transparent>
                                    <Icon name='navicon' color={colors.icon_white} size={30} />
                                </Button>
                            </Left>
                            <Title style={styles.title}>MEU PERFIL</Title>
                            <Right>
                                <Button transparent>
                                    <Icon name='gear' color={colors.icon_white} size={30} />
                                </Button>
                            </Right>
                        </Header>   

                        <View style={styles.filter}>
                            <FlatList
                                    data={this.state.listFilter}
                                    renderItem={({ item }) => <VerticalList data={item} />}
                                    keyExtractor={(item) => item.id.toString()}
                                    horizontal = { true }/>     
                        </View>
                        
                        <FlatList
                            data={this.state.listExercice}
                            renderItem={({ item }) => <HorizontalList data={item} />}
                            keyExtractor={(item) => item.id.toString()}/>
                            
                     </View>                
        )
    }
}

  