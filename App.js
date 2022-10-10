import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';

export default function App() {
  const [ products, setProducts ] = useState(['Aguas grises', 'Agua mineral', 'Berenjenas', 'Plátanos', 'Cheetos']);
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        { products.map((product, idx) => {
            return (
              <ListItem key={idx+product} productName={product} />
            );
        }) }
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
    backgroundColor: 'lightgray',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  }
});
