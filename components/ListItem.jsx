import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
    View } from 'react-native';

const ListItem = ({productId, productName, productQuantity, productType, isBought, onProductRemove, onBought }) => {

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

    const handleBoughtTextStyle = () => {

        if (isBought) {
            return styles.productBought;
        }

        return styles.productInfo;
    };

    const handleBoughtListStyle = () => {

        if (isBought) {
            return styles.listItemBought
        }

        return styles.listItem;
    };

  return (
        <View style={handleBoughtListStyle()}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(productId)}>
                <Image style={styles.productImage} source={handleImage(productType)} />
            </Pressable>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onBought(productId, isBought)}>
                <Text style={handleBoughtTextStyle()}>{productName}</Text>
            </Pressable>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onBought(productId, isBought)}>
                <Text style={handleBoughtTextStyle()}>x{productQuantity}</Text>
            </Pressable>
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
    listItemBought : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lawngreen',
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5
    },
    productImage: {
        width: 50,
        height: 50
    },
    productInfo: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center'
    },
    productBought: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ListItem;