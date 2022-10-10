import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {
  const [ products, setProducts ] = useState(['Aguas grises', 'Agua mineral', 'Berenjenas', 'Plátanos', 'Cheetos']);
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        { products.map((product, idx) => {
            return (
              <View key={idx} style={styles.listItem}>
                <Image style={styles.productImage} source={require('./assets/bigIcon.png')}/>
                <Text style={styles.productName}>{product}</Text>
              </View>
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
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '80%',
    marginBottom: 5,
    paddingHorizontal: 5
  },
  productImage: {
    width: 50,
    height: 50
  },

  productName: {
    fontSize: 18,
    textAlign: 'center',
    alignContent: 'center'
  }


});
