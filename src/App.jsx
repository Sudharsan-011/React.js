import {useState} from "react";
import { CORE_CONCEPTS ,EXAMPLES} from "./data.js";
import  Header from "./components/Header.jsx"
// import {EXAMPLES} from "./data.js"
import { Box } from "./components/core-concept.jsx";
import  TabButton  from "./components/buttonTab.jsx";

function App() {
  const [data,setData]= useState();
  function clickHandle(value){
    setData(value);
    console.log(data);
   
}
let tabContent=<p>please choose a topic</p>;
if(data){
  tabContent=<div id="tab-content">
  <h3>{EXAMPLES[data].title}</h3>
  <p>{EXAMPLES[data].description}</p>
  <pre>
    <code>
          {EXAMPLES[data].code}
    </code>
  </pre>
</div>

}

  return (
    <div>
      <Header/>
      <main>
      <section id="core-concepts">
        <h2>Core-concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item)=>(<Box key={item.title} {...item}/>))}
          {/* <Box {...CORE_CONCEPTS[0]}/>
          <Box {...CORE_CONCEPTS[1]}/>
          <Box {...CORE_CONCEPTS[2]}/>
          <Box {...CORE_CONCEPTS[3]}/> */}
        </ul>
      </section>
    <section id="examples">
      <h2>examples</h2>
    <menu>
      { (console.error())}
    <TabButton new={data==="components"} onSelect={() =>clickHandle("components")}> Component</TabButton>
        <TabButton new={data==="props"} onSelect={() =>clickHandle("props")}>props</TabButton>
        <TabButton new={data==="jsx"}  onSelect={() =>clickHandle("jsx")}>jsx</TabButton>
        <TabButton new={data==="state"} onSelect={()=>clickHandle("state")}>State</TabButton>
    </menu>

    {tabContent}
{/* {!data && }
{data && <div id="tab-content">
  <h3>{EXAMPLES[data].title}</h3>
  <p>{EXAMPLES[data].description}</p>
  <pre>
    <code>
          {EXAMPLES[data].code}
    </code>
  </pre>
</div>} */}
    </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
