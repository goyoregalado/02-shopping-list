import { StyleSheet } from "react-native";

import { Button, TextInput, View } from "react-native";

const ProductInput = () => {
    return (
      <View style={styles.productInput}>
          <TextInput style={styles.productName} placeholder='Introduzca un producto' />
          <Button style={styles.addButton} title="Añadir" />
      </View>
    );
}

const styles = StyleSheet.create({
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

export default ProductInput;