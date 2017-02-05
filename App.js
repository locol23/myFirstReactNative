import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import Main from './component/Main';
import Sub from './component/Sub';
import Other from './component/Other';
import TabIcon from './TabIcon';

export default class App extends Component {
  render() {
    return (
    <Router>
        <Scene key="root">
            <Scene
              key="tabbar" tabs
              tabBarStyle={styles.tabBar}
            >
                <Scene key="main" initial component={Main} title="Main" hideNavBar icon={TabIcon} />
                <Scene key="sub" component={Sub} title="Sub" hideNavBar icon={TabIcon} />
                <Scene key="other" component={Other} title="Other" hideNavBar icon={TabIcon} />
            </Scene>
        </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
    tabBar: {
        flex: 1,
        backgroundColor: 'rgb(50, 207, 202)',
    },
});