import {useEffect, useState} from "react";

function CountButton() {
    const [count, setCount] = useState(0);
    const [isThere, setIsThere] = useState(true);
    function increaseByOne(){
        setCount(count+1);
    }
    function decreaseByTwo(){
        setCount(count-2);
    }
    function resetCount(){
        setCount(0);
    }

    useEffect(() => {
        setIsThere(!isThere);
    },[count])
    return(
        <>
            <div  >Count: {count}</div>
            <button onClick={increaseByOne} >+</button>
            <button onClick={decreaseByTwo} >-</button>
            <button onClick={resetCount}>Reset</button>
            {isThere && <div>
                Hello World!
            </div>}
        </>
    );

}

export default CountButton;