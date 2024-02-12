import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from './RootParamList';
type NavigationProps = NativeStackScreenProps<RootParamList, 'ProductDetails'>;


export type ProductDetailsProps = {
    route: NavigationProps["route"],
    navigation: NavigationProps["navigation"]
}