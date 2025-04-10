import { useState } from "react"



function FormComponent(){


    const [nameValue,setNameValue]= useState(' ');
    const [emailValue,setEmailValue]=useState('');


    const [formData,setFormData]=useState({
        name:'',
        email:''
    })

    // function handleNameChange(event) {
    //     const {value}=event.target;
    //     setNameValue(value);
        
    // }

    function handleSubmit(event){
        event.preventDefault();
        console.log(nameValue,"nameValue");
        console.log(emailValue,"Email")
        
    }

    // function handleEmailChange(event) {
    //     const {value}=event.target;
    //     setEmailValue(value);
    // }

    function handleOnChange(event) {
        const {name,value}=event.target
        setFormData({
            ...formData,
            [name]:value
        })
            
    }
    console.log(formData);
    

    return<>
    <h1>Forms</h1>
    <form onSubmit={handleSubmit}>
    <input type="name"
    value={formData.name} 
    name="name"
    id="name" 
    placeholder="Enter your Name"
    onChange={handleOnChange}
    />
    <input type="email"
    value={formData.email} 
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