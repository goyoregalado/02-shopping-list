import { useState } from 'react';

import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const ProductInput = ({ show, onProductAdd }) => {
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
        <Modal visible={show} animationType={'fade'} transparent={true}>
            <View style={styles.productInput}>
                <TextInput style={styles.productName}
                    placeholder='Introduzca un producto'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName} />
                <Button
                    style={styles.addButton}
                    title="Añadir"
                    onPress={addProductHandler} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#ad1457",
        width: '80%',
        height: 80,
        borderRadius: 5,
        padding: 10
    },
    productName: {
        flex: 4,
        color: 'white'
    },
    addButton: {
        flex: 1
    }
});

export default ProductInput;