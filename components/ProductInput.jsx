
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { StyleSheet, TextInput, View, TouchableOpacity,Text} from 'react-native';





const ProductInput = ({ onProductAdd, product, setProducts }) => {
    
    const countries = ["fruit", "vegetable", "bakery", "fish", "meat"]

    const changeNameHandler = (value) => {

        setProducts((product)=>{
            return{
                ...product,
                name:value.trim()
            }
        });

    }


    const changeTypeHandler = (value) =>{
  
        setProducts((product)=>{
            return{
                ...product,
                type:value
            }
        })
    }
    

    const changeNumericHandler = (value)=>{
        setProducts((product) => {
            return{
                ...product,
                quantity:value
            }
        })
    }

    
    const addProductHandler = () => {
        
        setProducts((product)=>{
            return{
                ...product,
                id:uuidv4()
            }
        })
        
        onProductAdd(product);
        
        setProducts((product)=>{
            return{
                ...product,
                name:'',
                quantity:1,
                type:product.type
            }
        });
    }
    
    const disableHandler = () => {
        if(product.type !== 'tipo' && product.name !== ''){

            return false
        }else{

            return true
        }
    }
    
    return (
        <View style={styles.productInput}>
            <View style={styles.productLine}>
                <TextInput style={styles.product}
                    placeholder='Introduzca un producto'
                    keyboardType="default"
                    onChangeText={changeNameHandler}
                    value={product.name} />

                <SelectDropdown
                    buttonStyle={styles.select}
                    buttonTextStyle={styles.textButon}
                    defaultButtonText={product.type}
                    dropdownIconPosition={'right'}
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        changeTypeHandler(selectedItem)
                    }}

                    buttonTextAfterSelection={() => {
                    
                        return product.type
                    }}

                    rowTextForSelection={(item, index) => {
                        
                        return item
                    }}
                />      
            </View>
            <View style={styles.secondLine}>

                <NumericInput type='up-down' 
                upDownButtonsBackgroundColor='#f8bbd0'
                totalHeight={40}
                totalWidth={100}
                maxValue={20}
                minValue={1}
                iconStyle={{color:'white'}}
                editable={false} 
                initValue={product.quantity} 
                onChange={value => changeNumericHandler(value)} />

                {
                    (disableHandler()) === false
                    ?<TouchableOpacity style={styles.addButton} disabled={disableHandler()} onPress={addProductHandler}>
                        <Text style={styles.textButon}>Añadir</Text>
                     </TouchableOpacity>
                    :<TouchableOpacity style={styles.addButtonDisabled} disabled={disableHandler()} onPress={addProductHandler}>
                        <Text style={styles.textButonDisable}>Añadir</Text>
                     </TouchableOpacity>
                }
                    
                
            </View>                     
    
        </View>

    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#fff3e0",
        width: '100%',
        height: 140,
        padding: 10
    },
    productLine:{
        flexDirection:"row",
        justifyContent:'space-around',
        width:'100%'
        
    },
    secondLine:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    select:{
        height:40,
        width:100,
        borderRadius:4,
        backgroundColor:'#f8bbd0',
        
    },
    product: {
        width:'30%',
        color: 'white',
        backgroundColor:'#f8bbd0',
        borderRadius:4
    },
    addButton: {
        justifyContent:'center',
        width: 100,
        height:40,
        backgroundColor: '#f8bbd0',
        borderRadius:4
    },
    addButtonDisabled:{
        justifyContent:'center',
        width: 100,
        height:40,
        backgroundColor: '#c48b9f',
        borderRadius:4
    },
    textButon:{
        textAlign:'center',
        color: 'white'
       
    },
    textButonDisable:{
        textAlign:'center',
        color:'grey'
    }

    
});

export default ProductInput;