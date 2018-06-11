
import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log(props);
  // props.navigation.navigate();
  const { navigation } = props;
  return (<View>
    <Text>Componente SignIn</Text>
    <Button
      title="Navegar SignUp"
      onPress={() => {
 navigation.navigate('SignUp');
    }}
    />
  </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (<View>
    <Text>Componente SignUp</Text>
    <Button
      title="Regresar"
      onPress={() => {
              navigation.goBack();
            }}
    />
  </View>);
};

const RoutesNoAuthentication = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});

export { RoutesNoAuthentication };
