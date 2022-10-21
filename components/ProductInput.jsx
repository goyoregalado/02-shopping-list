import { useState } from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState({
        id:"",
        name:"",
        quantity:"",
        bought:"",
        type:""
    }
    );

    const changeTextHandler = (value) => {
        setProductName((productName)=>{
            return{
                ...productName,
                name:value.trim()
            }
        });
    }

    const addProductHandler = () => {
        
        if (productName.name !== '') {
            onProductAdd(productName);
        }
        setProductName('');
    }

    return (
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