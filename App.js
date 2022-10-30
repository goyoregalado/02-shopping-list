import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import ClearButton from './components/ClearButton';
import uuid from 'react-native-uuid';

export default function App() {
  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName, productType, productQuantity) => {

    const newProduct = {
      id: uuid.v4(),
      name: productName,
      quantity: productQuantity,
      bought: false,
      type: productType
    };

    setProducts(() => [...products, newProduct]);
  };

  const removeProductHandler = (id) => {
    setProducts(() => products.filter( product => product.id !== id));
  };

  const removeAllProductsHandler = () => {
    setProducts(() => []);
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>
      <ScrollView style={styles.productScroll}>
      <View style={styles.productList}>
        { 
          products.length === 0 
            ? <Text>No products yet</Text> 
            : products.map( product => (
              <ListItem 
                key={product.id}
                productId={product.id} 
                productName={product.name}
                productQuantity={product.quantity}
                productType={product.type} 
                onProductRemove={removeProductHandler}/>
            ))
        }
      </View>
      </ScrollView>
      <ClearButton 
        products={products}
        onProductsRemove={removeAllProductsHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fdff58',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  productScroll: {
    width: '100%'
  }
});
