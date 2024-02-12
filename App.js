import { Provider } from 'react-redux';
import { Cart } from './src/components/Cart/cart';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import { Shopping } from './src/components/Shopping/shopping';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetails } from './src/components/ProductDetails/productDetails';



const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Shopping'>
          <Stack.Screen name="Shopping" component={Shopping} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: "Product Details" }} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



