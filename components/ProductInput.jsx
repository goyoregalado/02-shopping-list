import { useState } from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value);
    }

    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        if (sanitizedName !== '') {
            onProductAdd(sanitizedName);
        }
        setProductName('');
    }

    return (
        <View>
            <View style={styles.productInput}>
                <TextInput style={styles.productName}
                    placeholder='Introduzca un producto'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName} />
            </View>
            <View>
                <Button
                    style={styles.addButton}
                    title="Añadir"
                    onPress={addProductHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        alignItems: 'center',
        backgroundColor: "#73e8ff",
        width: '100%',
        height: 50,
        borderRadius: 5,
        padding: 10
    },
    productName: {
        flex: 4,
        color: 'black'
    },
    addButton: {
        flex: 1
    }
});

export default ProductInput;