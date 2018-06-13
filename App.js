import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoutesNoAuthentication } from './Components/NoAuthentication/RoutesNoAuthentication';
import { RoutesAuthentication } from './Components/Authentication/RoutesAuthentication';


console.disableYellowBox = ['Remote debugger'];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }
  render() {
    return (
      <View style={styles.container}>
        <RoutesAuthentication/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
