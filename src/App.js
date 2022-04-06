import logo from './logo.svg';
import './App.css';
import {useState} from "react";

let x = 55;
let y = Number(4);

/*if (isLoggedIn) {
  let loginPanel = <ComponentReference/>
} else {
  let loginPanel = <ComponentReference2/>
}*/

let cc = console.log;
let printMe;
let stuff = true;

if (stuff) {
  printMe = "All the stuff";
} else {
  printMe = "None of the stuff";
}


const urls = [
  { title: "Home", url: "./", key: 0 },
  { title: "About", url: "./About", key: 1 },
  { title: "Contact", url: "./Contact", key: 2 },
];

const urlsMap = urls.map(url =>
<a href={url.url} key={url.key}> {url.title} </a> );
/*
function MyButton() {
    const [count, setCount] = useState(2);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>TOUCH ME {count} TIMES!</button>
        </div>
    )
}
*/

function MyButton({count}) {
    return (
        <button>{count}</button>
    )
}

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function locations() {
        return;
    }



    const where = []
    where[0] = 5;
    let aL = where[0];
    let bL = locations[1];

    cc(aL);

  return (
    <div className="App">
      {/*{ (5 > 4) ? alert("yes") : alert("no") } Runs twice */}
      {/*{ x ? {x} : 3} Doesn't work. */}
      {x}{y}
      <br />
      {x + y}
      <br />
      {printMe}
      <br />
      {urlsMap}
      <br />
        <button onClick={handleClick}>Click Me NOW! Do it {count} more times!</button>
        <button onClick={handleClick}>Click Me NOW! Do it {count} more times!</button>
        <br />
        <MyButton count={5}></MyButton>
        <MyButton count={5}></MyButton>
      <br />
        {/*<MyButton />
        <MyButton />*/}

    </div>
  );
}

export default App;
