import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './src/screens/Categories';
import Products from './src/screens/Products';
import SelectedProduct from './src/screens/SelectedProduct';
import Payment from './src/screens/Payment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{title: 'Feedr'}}
        />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SelectedProduct" component={SelectedProduct} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
