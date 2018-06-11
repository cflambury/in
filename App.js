import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoutesNoAuthentication } from './Components/NoAuthentication/RoutesNoAuthentication';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }
  render() {
    return (
      <View style={styles.container}>
        <RoutesNoAuthentication />
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
