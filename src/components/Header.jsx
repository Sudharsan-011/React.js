import reactImng from "../assets/react-core-concepts.png";
import "./header.css";
const changeValue=["fundamentals","core","crucial"];
function randGen(max){
  return (Math.floor(Math.random()*(max+1)));
}
export  default function Header() {
  let randomVal=changeValue[randGen(3)];

  return (

    <header>
      
      <img src={reactImng} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {randomVal} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>);
}