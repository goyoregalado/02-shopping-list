import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native';

import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';

import uuid from 'react-native-uuid';


export default function App() {

  const [ products, setProducts ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const addProductHandler = (productName) => {
    const productData = { key: uuid.v4(), value: productName}

    console.log(productData);

    setProducts(() => [...products, productData]);
    setShowModal(false);
  }

  const removeProductHandler = (productId) => {
    console.log(productId);
    setProducts(() => products.filter((product) => product.key !== productId));
  }

  return (
    <View style={styles.container}>
      <Button title='mostrar' onPress={() => setShowModal(true)}/>
      <ProductInput show={showModal} onProductAdd={addProductHandler}/>
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
                      productId={key}
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
  modalBody: {
    backgroundColor: 'pink',
    width: '70%',
    height: 300,
    marginTop: 200
  }
});
