import { StyleSheet, Text, View } from 'react-native';
import ProductInput from './components/ProductInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductInput />
      <View style={styles.productList}>
        <Text>Cuerpo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fff',

  },
  productList: {
    flex: 4
  }

});
