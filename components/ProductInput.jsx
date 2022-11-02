import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { Button, StyleSheet, TextInput, View} from 'react-native';

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('TYPE');
    const [productQuantity, setProductQuantity] = useState(1);
    const productCategory = ['Fruit', 'Vegetable', 'Bakery', 'Fish', 'Meat'];

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
        onProductAdd(productName, productType, productQuantity);
        setProductName('');
        setProductType('TYPE');
        setProductQuantity(1);
    };

    const isEmpty = () => {
        if (productName.trim() !== '' && productType !== 'TYPE') {
            return false;
        }
        return true;
    };

    return (
        <View>
        <View style={styles.productInput}>
            <View style={styles.boxName}>
                    <TextInput 
                        style={styles.productName}
                        placeholder='PRODUCT'
                        placeholderTextColor={'white'}
                        onChangeText={changeTextHandler}
                        value={productName} 
                    />
            </View>
            <View style={styles.productType}>
                <SelectDropdown
                    data={productCategory}
                    buttonStyle={styles.dropdownButtonStyle}
                    buttonTextStyle={styles.dropdownTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                    onSelect={(selectedItem) => {
                        changeTypeHandler(selectedItem);
                    }}
                    defaultButtonText={'TYPE'}
                    buttonTextAfterSelection={() => {
                        return productType;
                    }}
                    rowTextForSelection={(item) => {
                        return item;
                    }}
                    />
            </View>
        </View>
            <View>
                <View style={styles.boxQuantity}>
                    <NumericInput 
                        textColor='white'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#5564eb' 
                        leftButtonBackgroundColor='#5564eb'
                        initValue={productQuantity}
                        minValue={1}
                        maxValue={200}
                        totalWidth={90}
                        totalHeight={40}
                        step={1}
                        rounded
                        onChange={value => changeQuantityHandler(value)}
                        editable={false}
                        containerStyle={{ borderColor: 'white', borderRadius: 5}}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="ADD"
                        onPress={ addProductHandler }
                        disabled={ isEmpty() }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 35
    },
    productName: {
        flex: 2,
        color: 'white',
        textAlign: 'center'
    },
    productType: {
        flex: 2,
        color: 'white',
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 16
    },
    boxName: {
        backgroundColor: '#5564eb',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFFF',
        alignItems: 'center',
        width: '22%',
        marginRight: 20,
        marginLeft: 135,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFFF',
        width: 150,
        marginHorizontal: 200,
        backgroundColor: '#557DEB'
    },
    boxQuantity: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        color: 'white'
    },
    dropdownTextStyle: {
        textAlign:'center',
        color: '#FFFF',
        fontSize: 14
    },
    dropdownButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#5564eb',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFFF',
        width: '50%',
        height: 40,
        marginRight: 1,
        color: 'white'
    },
    dropdownStyle: {
        color: 'white',
        width: '32%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FFFF',
        backgroundColor: '#667ab0',
    }
    
});

export default ProductInput;