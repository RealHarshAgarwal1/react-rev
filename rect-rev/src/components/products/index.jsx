import ProductItem from "./components/product-item";
import "./style.css";
import { useEffect, useState } from "react";


function ProductList({name,city,listofProduct}){


    const [flag,setflag]=useState(true);
    const [count,setCount]=useState(0);
    const [changeStyle,setChangeStyle]=useState(false);


        function handleToggleText(){
            setflag(!flag);
        }

        function handleIncCount(){
            setCount(count+1);
        }
        function handleDecCount(){
            setCount(count===0?count:count-1)
        }


        useEffect(()=>{
            setflag(!flag);
            console.log("hello");
        },[])

        useEffect(()=>{
            if(count===10) setChangeStyle(true);
            console.log('count changed')
        },[count])

        console.log(changeStyle);


    return (<div>

        <button onClick={handleToggleText}>Toggle</button>
        <h3 className="title">PRoduct List</h3>
        {/* <ProductItem/> */}
        
        {flag? <h4>name={name}
            city={city}
        </h4>:<h4>Heeeeeeeeeeeeeeloooooo
        </h4>}

        <div>
            <button style={{backgroundColor:changeStyle?'black':'white',color:changeStyle?'white':'black'}} onClick={handleIncCount}>+</button>
            <h1>Count is {count}</h1>
            <button onClick={handleDecCount}>-</button>
        </div>


        <ul>
            {listofProduct.map((item,index)=>(
                <ProductItem singleProductItem={item} key={index}/>
            ))
            }
        </ul>
    </div>);
}
export default ProductList;