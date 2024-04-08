    export  default function TabButton(props){
        // function clickHandle(){
        //     alert("Hello");
        // }
        return(
    
        <li>
        <button className={props.new?"active":""} onClick={props.onSelect} >{props.children}</button>
        </li>
    );
    }