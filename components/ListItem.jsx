import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';

const ListItem = ({productId, productName, productQuantity, productType, onProductRemove }) => {

    const handleImage = (type) => {
        let result;

        switch (type){

            case 'fruit':
                result = require('../assets/fruit.png');
                break;

            case 'fish':
                result = require('../assets/fish.png');
                break;

            case 'meat':
                result = require('../assets/meat.png');
                break;

            case 'bakery':
                result = require('../assets/bakery.png');
                break;

            case 'vegetable':
                result = require('../assets/vegetable.png');
                break;   
                
            default:
                result = require('../assets/fruit.png');
                break;
        }

        return result;
    }

  return (
        <View style={styles.listItem}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(productId)}>
                <Image style={styles.productImage} source={handleImage(productType)} />
            </Pressable>
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.productName}>x{productQuantity}</Text>
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
        height: 50
    },
    productName: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ListItem;