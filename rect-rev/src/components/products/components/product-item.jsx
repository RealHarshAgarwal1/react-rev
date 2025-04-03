

function ButtonComponent(){
    return <button>Click Me </button>;
}




function ProductItem({singleProductItem, key}){
    return (<div key={key}>

        <p>{singleProductItem}</p>
        <ButtonComponent/>
    </div>);
}
 
export default ProductItem;