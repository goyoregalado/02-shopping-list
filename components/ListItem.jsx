import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';

const ListItem = ({ productName, onProductRemove }) => {
    const port = 0
  return (
    <View>

    
        
        
        <View style={styles.listItem}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(productName)}>

            {
                productName.type === "fruit"? <Image style={styles.productImage} source={require('../assets/fruta.jpg')} />: null     
            }
            {
                productName.type === "vegetable"? <Image style={styles.productImage} source={require('../assets/verdura.jpg')} />: null
            }
            {
                productName.type === "meat" ? <Image style={styles.productImage} source={require('../assets/carne.jpg')} />: null
            }
            {
                productName.type === "bakery" ? <Image style={styles.productImage} source={require('../assets/pan.jpg')} />: null
            }
            {
                productName.type === "fish" ? <Image style={styles.productImage} source={require('../assets/pescado.jpg')} />: null
            }   

                
            </Pressable>
            <Text style={styles.productName}>cantidad: {productName.quantity} {productName.name}</Text>
            
        </View>
        
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
        width: '80%',
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
        alignContent: 'center'
    }
});

export default ListItem