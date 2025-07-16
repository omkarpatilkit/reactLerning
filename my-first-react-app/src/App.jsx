
import './App.css'
import SimpleHeading from "./componenets/SimpleHeading.jsx";
import CountButton from "./componenets/CountButton.jsx";
import TextComponent from "./componenets/TextComponent.jsx";
import ArrayListItems from "./componenets/ArrayListItems.jsx";

function App() {

  return (

    <>
      <div>
          <h1>From APP JSX</h1>
          <ArrayListItems/>
          <CountButton/>
          <SimpleHeading name='Custom HEading'/>
          <TextComponent/>

      </div>
    </>
  )
}

export default App
