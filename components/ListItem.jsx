import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text,
    View } from 'react-native';
import { useState } from 'react';
const ListItem = ({ productName, onProductRemove, setProductName }) => {
    const [ port , setport] = useState(0)
    const changeImage = () =>{
        let imagen
        switch (productName.type){
            case "fruit":
              return require('../assets/fruta.jpg')
                
            case "vegetable":
                return require('../assets/verdura.jpg')
            case "bakery":
                return require('../assets/pan.jpg')
            case "fish":
                return require('../assets/pescado.jpg')
            case "meat":
                return require('../assets/carne.jpg')
        }
    }

    const seleInput = (value) =>{
        
        setProductName((productName)=>{

            return{
                ...productName,
                bought:value
            } 
        }) 
        setport(value)
        console.log(productName)
        
    }

  return (
    <View>

    {
        
        port == 0 ?
        <View style={styles.listItem}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => seleInput(1)}>
                <Image style={styles.productImage} source={changeImage()} />    
            </Pressable>
            <Text style={styles.productName}>cantidad: {productName.quantity} {productName.name}</Text>
        </View>
        :<View style={styles.listItemSelect}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => seleInput(0)}>
                <Image style={styles.productImage} source={changeImage()} ></Image>     
            </Pressable>
            <Text style={styles.productNameSelect}>cantidad: {productName.quantity} {productName.name}</Text>
        
        </View>
    }
        
    </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: 300,
        height:62,
        marginBottom: 5,
        paddingHorizontal: 5
    },
    listItemSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        width: 300,
        height:62,
        marginBottom: 5,
        paddingHorizontal: 5
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius:50
    },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center',
    }
});

export default ListItem