import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from './RootParamList';

export type NavigationProps = NativeStackScreenProps<RootParamList, 'UseShoppingHooks'>;

export type ShoppingProps = {
    navigation: NavigationProps["navigation"]
}