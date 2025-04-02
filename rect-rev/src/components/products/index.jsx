import ProductItem from "./components/product-item";

const dummyProductData=['Product1','Product2','Product3','Product4','Product5'];


function ProductList(){
    return (<div>
        <h3>PRoduct List</h3>
        {/* <ProductItem/> */}

        <ul>
            {
                dummyProductData.map((item,index)=><li key={index}>{item}{console.log(index)}</li> )
            }
        </ul>
    </div>);
}
export default ProductList;