import { useContext } from "react";
import { GlobalContext } from "../../context";



function ContextButtonComponent(){

    const {SetTheme,theme}=useContext(GlobalContext);
    return <button onClick={()=>SetTheme(theme==='light'?'dark':'light')}>Change Theme</button>

}

export default ContextButtonComponent;