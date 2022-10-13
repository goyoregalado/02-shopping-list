import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';

export default function App() {
  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName) => {
    setProducts(() => [...products, productName]);
  }

  const removeProductHandler = (productName) => {
    console.log(productName);
    setProducts(() => products.filter((product) => product !== productName));
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler}/>

        <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text>Aún no hay productos</Text> 
              : products.map((product, idx) => (
                <ListItem 
                  key={idx+product} 
                  productName={product} 
                  onProductRemove={removeProductHandler}/>
              ))
          }
        </View>
        </ScrollView>
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
    backgroundColor: 'lightgray',

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
