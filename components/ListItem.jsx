import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text,
    View } from 'react-native';
import { useState } from 'react';
const ListItem = ({ product,  setproduct }) => {
    const [ bougth , setBought] = useState(0)
    const changeImage = () => {
        
        switch (product.type){
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

    const selectBought = (value) =>{
        setBought(value)
        setproduct((product)=>{

            return{
                ...product,
                bought: value
            } 
        }) 
        
        
    }

  return (
    <View>

    {
        
        bougth == 0 ?

        <View style={styles.listItem} >
            <Pressable style={{flexDirection: 'row'}} onPress={() => selectBought(1)}>
                <Image style={styles.productImage} source={changeImage()} />    
            </Pressable>
            <Text style={styles.product}>{product.name} x {product.quantity}</Text>
        </View>

        :<View style={styles.listItemOnBought} >
            <Pressable style={{flexDirection: 'row'}} onPress={() => selectBought(0)}>
                <Image style={styles.productImage} source={changeImage()} ></Image>     
            </Pressable>
            <Text style={styles.productOnBought}>  {product.name} x {product.quantity}</Text>
        
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
        backgroundColor: "#fff3e0",
        borderRadius: 5,
        width: 300,
        height:62,
        marginBottom: 5,
        paddingHorizontal: 5
    },
    listItemOnBought: {
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
    productOnBought:{
        fontSize:18,
        textAlign:'center',
        textDecorationLine:'line-through'
    },
    
    product: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center',
    }
});

export default ListItem