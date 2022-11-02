import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

export default function App() {
  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName, productType, productQuantity) => {
    const newProduct = {
      id: uuid.v4(),
      name: productName,
      type: productType,
      quantity: productQuantity,
      bought: false,
    };
    setProducts(() => [...products, newProduct]);
  };

  const boughtHandler = (id, boughtValue) => {
    const newProduct = products.map( product => {
      if (product.id === id) {
        return {
          ...product,
          bought: !boughtValue
        }
      }
      return product;
    });
    setProducts(newProduct);
  };
  const removeProductHandler = (id) => {
    setProducts(() => products.filter( product => product.id !== id));
  };

  const removeAllProductsHandler = () => {
    setProducts(() => []);
  };

  const isEmpty = () => {
    if (products.length !== 0) {
        return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>
      <ScrollView style={styles.productScroll}>
      <View style={styles.productList}>
        { 
          products.length === 0 
            ? <Text style={styles.noProducts}>No products yet</Text> 
            : products.map( product => (
              <ListItem 
                key={product.id}
                productId={product.id} 
                productName={product.name}
                productQuantity={product.quantity}
                productType={product.type}
                isBought={product.bought}
                onProductRemove={removeProductHandler}
                onBought={boughtHandler}/>
            ))
        }
      </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title="CLEAR"
          onPress={ removeAllProductsHandler }
          disabled={ isEmpty() }
          />
      </View>
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
    backgroundColor: '#8098D9',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  productScroll: {
    width: '100%'
  },
  noProducts: {
    marginTop: 100,
    color: 'white',
    fontSize: 15
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFF',
    width: 100,
    marginHorizontal: 200,
    backgroundColor: '#557DEB',
    marginBottom: 20,
    color: '#FFFF'
  }
});