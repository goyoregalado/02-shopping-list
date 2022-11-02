import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ListItem = ({productId, productName, productQuantity, productType, isBought, onProductRemove, onBought }) => {

    const handleImage = (type) => {
        switch (type){
            case 'Fish':
                return require('../assets/pescado.png');
            case 'Meat':
                return require('../assets/carne.png');
            case 'Vegetable':
                return require('../assets/verduras.png');
            case 'Fruit':
                return require('../assets/fruta.png');
            case 'Bakery':
                return require('../assets/pan.png');   
        }
    }

  return (
        <View style={styles.listItem}>
            <Pressable 
                style={{flexDirection: 'row'}} 
                onPress={() => onProductRemove(productId)}>
                <Image 
                    style={styles.productImage} 
                    source={handleImage(productType)} />
            </Pressable>
            <Pressable 
                style={{flexDirection: 'row'}} 
                onPress={() => onBought(productId, isBought)}>
                <Text 
                style={styles.productInfo}>{productName}</Text>
            </Pressable>
            <Pressable 
                style={{flexDirection: 'row'}} 
                onPress={() => onBought(productId, isBought)}>
                <Text style={styles.productInfo}>x{productQuantity}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5564eb',
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 10
    },
    productImage: {
        width: 50,
        height: 40,
        color: '#fff',
        margin: 4
    },
    productInfo: {
        fontSize: 18,
        textAlign: 'center',
        alignContent: 'center',
        color: '#fff'
    }
});

export default ListItem;