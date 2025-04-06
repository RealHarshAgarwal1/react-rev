import { useState } from "react"



function FormComponent(){


    const [nameValue,setNameValue]= useState(' ');
    const [emailValue,setEmailValue]=useState('');

    function handleNameChange(event) {
        const {value}=event.target;
        setNameValue(value);
        
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(nameValue,"nameValue");
        console.log(emailValue,"Email")
        
    }

    function handleEmailChange(event) {
        const {value}=event.target;
        setEmailValue(value);
    }

    function handleOnChange(event) {
        const {name,value}=event.target
    }

    return<>
    <h1>Forms</h1>
    <form onSubmit={handleSubmit}>
    <input type="name"
    value={nameValue} 
    name="name"
    id="name" 
    placeholder="Enter your Name"
    onChange={handleOnChange}
    />
    <input type="email"
    value={emailValue} 
    name="email"
    id="email" 
    placeholder="Enter your Email"
    onChange={handleOnChange}
    />

    <button type="submit">Submit</button>

    </form>
    
    </>
}

export default FormComponent