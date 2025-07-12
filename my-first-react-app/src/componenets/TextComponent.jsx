import {useState} from "react";


function TextComponent(){
    const [inValue, setInValue] = useState('First');


    return(
        <>
            <input value={inValue} onChange={e => setInValue(e.target.value)}/>
            <div>
                {inValue}
            </div>


        </>
    )
}


export default TextComponent;