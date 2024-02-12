import { useEffect, useState } from 'react';
import { getProducts, Product } from '../data/api';
import { useAppDispatch, useAppSelector } from '../redux/hooks';


export const UseShoppingHooks = ({ navigation }:{navigation:any}) => {

    const [products, setProducts] = useState<Product[]>([])
    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            let products = []
            try {
                products = await getProducts()
            } catch (err:any) {
                throw new Error(err)
            }

            if (products.length) {
                setProducts(products)
            }
        }

        fetchProducts()
    }, [])

    return { products,cart,dispatch };

}