import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Splash from '../ui/splash/screen/Splash';
import Home from '../ui/home/screen/Home';

const RouterComponent = () =>{
    return (
        <Router>
            <Scene key = 'root'>
            
                <Scene 
                    key = "splash"
                    component = {Splash}
                    hideNavBar
                    initial/>

                <Scene 
                    key = "home"
                    component = {Home}
                    hideNavBar
                    initial/>    

            </Scene>
        </Router>
    );
};

export default RouterComponent;