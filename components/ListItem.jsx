import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

const ListItem = ({ productName, onProductRemove }) => {
    return (
        <View style={styles.listItem}>
            <Pressable style={{ flexDirection: 'row' }} onPress={() => onProductRemove(productName)}>
                <Image style={styles.productImage} source={require('../assets/bigIcon.png')} />
            </Pressable>
            <Text style={styles.productName}>{productName}</Text>

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

export default ListItem