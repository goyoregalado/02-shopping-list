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
        <View style={styles.inputOptionsStyle}>
            <View style={styles.productInput}>
                <TextInput style={styles.productName}
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
                    rowStyle={styles.dropdownRowStyle}
            />
            </View>
            <View style={styles.productInput}>
                <NumericInput 
                    type='plus-minus'
                    valueType='integer'
                    initValue={productQuantity}
                    minValue={1}
                    maxValue={10}
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
    );
}

const styles = StyleSheet.create({
    inputOptionsStyle: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        width: '80%'
    },
    productInput: {
        alignItems: 'center',
        backgroundColor: "#73e8ff",
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
    },
    dropdownBtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
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