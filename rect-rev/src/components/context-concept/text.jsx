import { useContext } from "react";
import { GlobalContext } from "../../context";



function ContextTextComponent(){

    const {theme}= useContext(GlobalContext);
    return <h1 style=
    {{fontSize: theme==='light'?'50px':'100px',backgroundColor:theme==='light'?'blue':'red',color:theme==='light'?'black':'white'}}>Harsh Agarwal</h1>

}

export default ContextTextComponent;