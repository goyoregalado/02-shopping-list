import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';

import uuid from 'react-native-uuid';


export default function App() {

  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName) => {
    const productData = { key: uuid.v4(), value: productName}

    console.log(productData);

    setProducts(() => [...products, productData]);
  }

  const removeProductHandler = (productName) => {
    console.log(productName);
    setProducts(() => products.filter((product) => product !== productName));
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>
        <View style={styles.productList}>
          { products.length === 0 ? (
            <View>
              <Text>Aún no se han introducido productos</Text>
            </View>
          ) : (
            <FlatList data={products} renderItem={(productData) => {
              const { key, value } = productData.item;

              return (
                <ListItem 
                      key={key} 
                      productName={value} 
                      onProductRemove={removeProductHandler}/>
              )
            }} />
          )
        }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 30,
    backgroundColor: 'lightgray',

  },
  productList: {
    marginTop: 10,
    width: '90%',
    alignItems: 'center'
  },
});
