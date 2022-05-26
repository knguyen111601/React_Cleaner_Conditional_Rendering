import {useState} from "react"
import {RenderIf} from "./utils/Renderif"

function App() {

  const [value, setValue] = useState(5)


  return (
    <>

    <i>Current Value: {value}</i>

    <RenderIf isTrue={value === 5}> {/* Here, RenderIf checks if value === 5 */}
      <h1>Value is 5! I will get rendered!</h1>
      <button onClick={()=> setValue(5)}>Update</button>
    </RenderIf>

    <RenderIf isTrue={value===3}> {/* Here, RenderIf checks if value === 3 */}
      <h1>I will get rendered when value is 3!</h1>
      <button onClick={()=> setValue(5)}>Update</button>
    </RenderIf>
    </>
  );
}

export default App;
