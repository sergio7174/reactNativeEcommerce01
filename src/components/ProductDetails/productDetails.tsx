import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getProducts, Product } from '../../data/api';
import { useAppDispatch } from '../../redux/hooks';
import { cartActions } from '../../redux/slices/cartSlice/cartSlice';
import { styles } from './styles';
import { ProductDetailsProps } from 'types/ProductDetailsProps';


export const ProductDetails: React.FC<ProductDetailsProps> = ({ route, navigation }) => {


    const [product, setProduct] = useState<Product>()
    const { itemId } = route.params;
    const dispatch = useAppDispatch();

    const handleAddToCart = (item: Product) => {
        dispatch(cartActions.addItem(item.id));
        navigation.navigate("Cart")
    };

    useEffect(() => {
        const fetchProduct = async () => {
            let products = []
            try {
                products = await getProducts({ itemIds: [itemId] })
            } catch (err:any) {
                throw new Error(err)
            }

            if (products.length) {
                setProduct(products[0])
            }
        }

        fetchProduct()
    }, [])

    if (!product) {
        // Handle loading here (by adding a shimmer effect, for example)
        return null
    } 

    return (
        <View style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: product.image }} alt={product.imageAlt} resizeMode="cover" />
            <View style={styles.productDetailsContainer}>
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productDescription}>{product.fullDescription}</Text>
                <View>
                    <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(product)}>
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};