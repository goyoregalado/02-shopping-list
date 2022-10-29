
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input';
import { StyleSheet, TextInput, View, TouchableOpacity,Text} from 'react-native';




const ProductInput = ({ onProductAdd, productName, setProducts }) => {
    
    const countries = ["fruit", "vegetable", "bakery", "fish", "meat"]
    let disabled
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
        
        
            onProductAdd(productName);
        

        setProducts((productName)=>{
            return{
                ...productName,
                name:'',
                quantity:1,
                type:productName.type
            }
        });
    }
    
    const disableHandler = () =>{
        if(productName.type !== 'tipo' && productName.name !== ''){
            
            
            return false
        }else{
            
           
            
            return true
        }
    }
    
    return (
        <View style={styles.productInput}>
            <View style={styles.productLine}>
                <TextInput style={styles.productName}
                    placeholder='Introduzca un producto'
                    keyboardType="default"
                    onChangeText={changeNameHandler}
                    value={productName.name} />

                <SelectDropdown
                    buttonStyle={styles.select}
                    buttonTextStyle={styles.textButon}
                    defaultButtonText={productName.type}
                    
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        changeTypeHandler(selectedItem)
                    }}

                    buttonTextAfterSelection={() => {
                    
                        return productName.type
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
                iconStyle={{color:'white'}}
                editable={false} 
                initValue={productName.quantity} 
                onChange={value => changeNumericHandler(value)} />
                {
                    (disableHandler())===false
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
    productName: {
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