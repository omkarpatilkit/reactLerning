import {useState} from "react";

function ArrayListItems() {

    const [items, setItems] = useState(["apple","banana"]);
    function addToList() {
        const newItem = document.getElementById("inputArray").value;
        setItems(i=> [...i,newItem]);
        document.getElementById("inputArray").value = "";

    }
    function handleEnterKey(e){
        if(e.key === "Enter"){
            addToList();
        }
    }
    function  deleteItem(item) {
        setItems(i=> i.filter(n => n !== item));
    }
    return (
        <>
            {
                items.map((item, index) => (
                    <>
                    <li key={index}>
                        {item}
                    <button onClick={()=>deleteItem(item)}>Delete item</button>
                    </li>
                    </>
                ))
            }
            <input id = "inputArray" onKeyDown={handleEnterKey}/>
            <button onClick={addToList}> addToList</button>
        </>
    )
}

export default ArrayListItems;