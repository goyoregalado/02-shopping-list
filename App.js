import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.productInput}>
        <TextInput style={styles.productName} placeholder='Introduzca un producto'/>
        <Button style={styles.addButton}title="Añadir" />
      </View>
      <View>
        <Text>Cuerpo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#eef4ed",
    width: '80%',
    height: 80,
    borderRadius: 5,
    padding: 10
  },
  productName: {
    flex: 4
  },
  addButton: {
    flex: 1
  }

});
