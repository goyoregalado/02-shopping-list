import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ProductInput from './components/ProductInput';
import ListItem from './components/ListItem';


export default function App() {
  const [product, setproduct] = useState({
    id:"",
    name:"",
    quantity:1,
    bought:0,
    type:"tipo"
});

  const [ products, setProducts ] = useState([]);

  const addProductHandler = (product) => {
    console.log(product.id)
    setProducts(() => [...products, product]);
  }
  
  const removeProductHandler = (product) => {
    console.log(product.id);
    setProducts(() => products.filter((product) => product !== product));
  }

  const removeAll = ()=>{
    setProducts([])
  }

  const isDisable = () =>{
    if (products.length===0){
      return true
    }else{
      return false
    }
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} product={product} setProducts={setproduct}/>
      <View style={styles.body}>
      <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text style={styles.center}>Aún no hay productos</Text> 
              : products.map((product, idx) => (
                <ListItem 
                  key={product.id} 
                  product={product} 
                  setproduct={setproduct}
                  onProductRemove={removeProductHandler}/>
                  
              ))
          }
        </View>
        {
        products.length===0 
          ? <View>
              <TouchableOpacity style={styles.clearButtonDisabled} disabled={isDisable()} onPress={removeAll}>
              <Text style={styles.textButon}>clear</Text>
            </TouchableOpacity>
          </View>
          :<View>
            <TouchableOpacity style={styles.clearButton} disabled={isDisable()} onPress={removeAll}>
              <Text style={styles.textButon}>clear</Text>
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
  clearButton: {
    justifyContent:'center',
    width: 100,
    height:40,
    backgroundColor: '#f8bbd0',
    borderRadius:4,
    marginLeft:'35%'
  },
  clearButtonDisabled:{
    justifyContent:'center',
    width: 100,
    height:40,
    backgroundColor: '#c48b9f',
    borderRadius:4,
    marginLeft:'10%'
  },
  textButon:{
    textAlign:'center',
    color: 'gray'
   
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
