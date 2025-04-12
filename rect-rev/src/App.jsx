import ProductList from './components/products'
import './App.css'
import Users from './index';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import UserReducerExample from './components/use-reducer-example';
import FormComponent from './components/form/index.jsx';
function App() {

  
// const dummyProductData=['Product1','Product2','Product3','Product4','Product5'];
  return (
    <>
     <h1>Ecom</h1>
//
     {/* <ProductList listofProduct={dummyProductData} name="harsh" city="a"/> */}
     {/* <Users/> */}
     {/* <ContextButtonComponent />
     <ContextTextComponent /> */}

     {/* <UserReducerExample/> */}
     <FormComponent/>
     //
    </>
  )
}

export default App
