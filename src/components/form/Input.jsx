import React,{useState} from 'react';

export default function Input(props) {
    const [nome,setNome] = useState("Victor")

    function handleChange(event){
         setNome(event.target.value)
    }

    return(
        <div>
            <h3>{nome}</h3>
            <input type="text" 
                value={nome} 
                onChange={handleChange}
            />
        </div>
    );
}