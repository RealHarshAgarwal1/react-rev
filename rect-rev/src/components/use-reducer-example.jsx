import { useReducer } from "react"



const initialState={
    showTextFlag:0,
    changeTextStylesFlag:0
}

function reducer(state,action){
    switch(action.type){
        case 'HIDE_TEXT':
            return {
                ...state,
                showTextFlag:false
            };

        case 'SHOW_TEXT':
            return {
                ...state,
                showTextFlag:true   
            };

        case 'CHANGE_TEXT_STYLE':
            return {
                ...state,
                changeTextStylesFlag:!state.changeTextStylesFlag
            };

            default:
            return state;
    }
}

export default function UserReducerExample(){

    const[state,dispatch]=useReducer(reducer,initialState)
    console.log(state);



    return <div>
        {
            state?.showTextFlag?<h3 style={{backgroundColor:state?.changeTextStylesFlag?'black':
                'red'
            }}>Reducer Hook Example</h3>:
            null
        }
        
        <button onClick={()=>dispatch({type:'HIDE_TEXT'})}>Hide Text</button>
        <button onClick={()=>dispatch({type:'SHOW_TEXT'})}>Show Text</button>
        <button onClick={()=>dispatch({type:'CHANGE_TEXT_STYLE'})}>Change Text Style</button>
    </div>
}