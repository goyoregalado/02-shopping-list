import { Button, StyleSheet, View } from 'react-native';

const ClearButton = ({ products, onProductsRemove }) => {

    const isDisabled = () => {

        if (products.length !== 0) {
            return false;
        }

        return true;
    };

    return (
            <View style={styles.buttonAlign}>
                <Button
                    style={styles.buttonStyle}
                    title="Clear"
                    onPress={onProductsRemove}
                    disabled={isDisabled()}
                />
            </View>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'red'
    },
    buttonAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50
    }
});

export default ClearButton;