import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import NumericInput from 'react-native-numeric-input'
import { uuid } from 'react-native-uuid';


const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const [typeName, setTypeName] = useState('');
    const [quantity, setQuantity] = useState(1)
    const productType = ["Fruit", "Vegetable", "Bakery", "Fish", "Meet"]

    const changeProductHandler = (value) => {
        setProductName(value);
    }

    const changeTypeHandler = (value) => {
        setTypeName(value);
    }

    const changeQuantityHandler = (value) => {
        setQuantity(value);
    }

    const addProductHandler = () => {
        const sanitizedName = productName.trim();
        const key = uuid.v4();
        if (sanitizedName !== '') {
            onProductAdd(sanitizedName, quantity, typeName, key);
        }
        setProductName('');
        setTypeName('');
        setQuantity(1);
    }

    return (
        <View>
        <View style={styles.productInput}>
            <View style={styles.boxName}>
            <TextInput style={styles.productName}
                placeholder='PRODUCT'
                placeholderTextColor={"#FFFFFF"}
                keyboardType="default"
                onChangeText={changeProductHandler}
                value={productName} />
            </View>
            <View style={styles.boxType}>
            <SelectDropdown 
                data={productType}
                totalWidth={50}
                totalHeight={37} 
                onSelect={(selectedItem, index) => {
                    changeTypeHandler(selectedItem)
               }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}
                rowTextForSelection={(item) => {
                    return item
                }}
                onChange={changeTypeHandler}
                value={typeName}
            />
            </View> 
        </View>
        <View style={styles.boxQuantity}>
            <NumericInput 
                minValue={1}
                maxValue={200}
                editable={false}
                totalWidth={100} 
                totalHeight={37} 
                iconSize={50}
                step={1}
                valueType='real'
                rounded 
                inputStyle={{color: '#ffff', backgroundColor: '#AA8F66'}}
                iconStyle={{ color: '#AA8F66' }} 
                rightButtonBackgroundColor='#ffff' 
                leftButtonBackgroundColor='#ffff'
                onChange={changeQuantityHandler} 
                value={quantity}
                />
        </View>
        <View style={styles.button}>
            <Button
                title="ADD"
                onPress={addProductHandler}
                color="#AA8F40"
                />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90,
        padding: 25,
        marginTop: 35,
    },
    boxFatherQuantity: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    productName: {
        flex: 4,
        color: 'white',
        textAlign: 'center'
    },
    productType: {
        flex: 4,
        color: 'white',
        textAlign: 'center'
    },
    boxName: {
        backgroundColor: '#AA8F66',
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#AA8F66',
        width: '50%'
    },
    boxType: {
        backgroundColor: '#AA8F66',
        marginLeft: 10,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#AA8F66',
        width: '50%'
    },  
    button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxQuantity: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        with: 10
    }
});

export default ProductInput;
