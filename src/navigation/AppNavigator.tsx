import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductDetailsScreen from '@screens/ProductDetailsScreen';
import ProductListScreen from '@screens/ProductListScreen';
import routes from './routes';

/**
 * Create a stack navigator with two screens, product list and product details
 * @returns app stack navigator
 */

function AppNavigator() {
  const ProductStack = createNativeStackNavigator();

  return (
    <ProductStack.Navigator screenOptions={{headerShown: false}}>
      <ProductStack.Screen
        name={routes.PRODUCTLIST}
        component={ProductListScreen}
      />
      <ProductStack.Screen
        name={routes.PRODUCTDETAILS}
        component={ProductDetailsScreen}
      />
    </ProductStack.Navigator>
  );
}

export default AppNavigator;
