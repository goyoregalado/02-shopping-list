import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';


export default function App() {
  const [productName, setProductName] = useState({
    id:"",
    name:"",
    quantity:1,
    bought:0,
    type:"tipo"
});

  const [ products, setProducts ] = useState([]);

  const addProductHandler = (productName) => {
    setProducts(() => [...products, productName]);
  }
  
  const removeProductHandler = (productName) => {
    console.log(productName);
    setProducts(() => products.filter((product) => product !== productName));
  }
  const removeAll = ()=>{
    setProducts([])
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} productName={productName} setProducts={setProductName}/>
      <View style={styles.body}>
      <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text style={styles.center}>Aún no hay productos</Text> 
              : products.map((product, idx) => (
                <ListItem 
                  key={idx+product} 
                  productName={product} 
                  setProductName={setProductName}
                  onProductRemove={removeProductHandler}/>
                  
              ))
          }
        </View>
        {
        products.length===0 
          ? null
          :<View>
            <TouchableOpacity style={styles.addButton} onPress={removeAll}>
              <Text style={styles.textButon}>Remove all</Text>
            </TouchableOpacity>
          </View>
        }
        
        </ScrollView>
      </View> 
      
      
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 30,
    backgroundColor: '#ffeeff',

  },
  productList: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  addButton: {
    justifyContent:'center',
    width: 100,
    height:40,
    backgroundColor: '#f8bbd0',
    borderRadius:4
  },
  textButon:{
    textAlign:'center',
    color: 'white'
   
},
center:{
  width:'100%',
},
  body:{
    justifyContent:'center'
  },
 
  productScroll: {
    width: '100%',
   
  }
});
