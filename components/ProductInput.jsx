import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';

import { Button, 
         StyleSheet, 
         TextInput, 
         View} 
from 'react-native';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('Category...');
    const [productQuantity, setProductQuantity] = useState(1);

    const productTypes = ['fruit', 'vegetable', 'bakery', 'fish', 'meat'];

    const changeTextHandler = (value) => {
        setProductName(value);
    };

    const changeTypeHandler = (value) => {
        setProductType(value);
    };

    const changeQuantityHandler = (value) => {
        setProductQuantity(value);
    };

    const addProductHandler = () => {

        productName.length > 15
            ? alert('Your product exceeds the supported character length limit')
            : onProductAdd(productName, productType, productQuantity);

        setProductName('');
        setProductType('Category...');
        setProductQuantity(1);
    };

    const isDisabled = () => {

        const sanitizedName = productName.trim();

        if (sanitizedName !== '' && productType !== 'Category...') {
            return false;
        }

        return true;
    };

    return (
        <View style={styles.inputOptionsStyles}>
            <View style={styles.inputOptionsStyle1}>
                <View style={styles.productInput}>
                    <TextInput
                        placeholder='Enter a product'
                        keyboardType="default"
                        onChangeText={changeTextHandler}
                        value={productName} />
                </View>
                <View>
                    <SelectDropdown
                        data={productTypes}
                        onSelect={(selectedItem) => {
                            changeTypeHandler(selectedItem);
                        }}
                        defaultButtonText={'Category...'}
                        buttonTextAfterSelection={() => {
                            return productType;
                        }}
                        rowTextForSelection={(item) => {
                            return item;
                        }}
                        buttonStyle={styles.dropdownBtnStyle}
                        buttonTextStyle={styles.dropdownBtnTxtStyle}
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}/>
                </View>
            </View>
            <View style={styles.inputOptionsStyle2}>
                <View style={styles.numberInput}>
                    <NumericInput 
                        type='plus-minus'
                        valueType='integer'
                        initValue={productQuantity}
                        minValue={1}
                        maxValue={99}
                        onChange={value => changeQuantityHandler(value)}
                        editable={false}
                    />
                </View>
                <View>
                    <Button
                        style={styles.addButton}
                        title="Add"
                        onPress={addProductHandler}
                        disabled={isDisabled()}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputOptionsStyles: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
        marginTop: 15
    },
    inputOptionsStyle1: {
        flexDirection: 'column',
        width:'80%',
        marginBottom: 10
    },
    inputOptionsStyle2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width:'80%'
    },
    productInput: {
        backgroundColor: "#64dd17",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
        height: 50,
        width: '100%',
        padding: 10,
        marginBottom: 5
    },
    numberInput: {
        alignItems: 'center',
        height: 50
    },
    dropdownBtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownBtnTxtStyle: {
        color: '#444', 
        textAlign: 'left'
    },
    dropdownDropdownStyle: {
        backgroundColor: '#EFEFEF'
    },
    dropdownRowStyle: {
        backgroundColor: '#EFEFEF', 
        borderBottomColor: '#C5C5C5'
    },
    dropdownRowTxtStyle: {
        color: '#444',
        textAlign: 'left'
    }
});

export default ProductInput;