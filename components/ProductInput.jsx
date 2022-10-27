import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { Button, StyleSheet, TextInput, View } from 'react-native';
const countries = ["fruit", "vegetable", "bakery", "fish", "meat"]
const ProductInput = ({ onProductAdd, productName, setProducts }) => {
    

    const changeNameHandler = (value) => {

        setProducts((productName)=>{
            return{
                ...productName,
                name:value.trim()
            }
        });

    }


    const changeTypeHandler = (value) =>{
  
        setProducts((productName)=>{
            return{
                ...productName,
                type:value
            }
        })
    }
    

    const changeNumericHandler =(value)=>{
        setProducts((productName)=>{
            return{
                ...productName,
                quantity:value
            }
        })
    }

    
    const addProductHandler = () => {
        
        if (productName.name !== undefined) {
            onProductAdd(productName);
        }
        setProducts('');
    }

    return (
        <View style={styles.productInput}>
            <View style={styles.productLine}>
                <TextInput style={styles.productName}
                    placeholder='Introduzca un producto'
                    keyboardType="default"
                    onChangeText={changeNameHandler}
                    value={productName} />

                <SelectDropdown
                    buttonStyle={styles.select}
                    defaultButtonText="Type"
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        changeTypeHandler(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />      
            </View>
            <View style={styles.secondLine}>
                <NumericInput type='up-down' onChange={value => changeNumericHandler(value)} />
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
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#ad1457",
        width: '80%',
        height: 140,
        borderRadius: 5,
        padding: 10
    },
    productLine:{
        flexDirection:"row",
        height:"40%"
    },
    secondLine:{
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    select:{
        height:40,
        width:100
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