// // import logo from "./logo.svg";
// // import "./App.css";
// // import Title from "./components/Title/Title";
// // import Greeting from "./components/Greeting/Greeting";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <Title name="Aldin" age={21} nekiProp={true} />
// //         <Greeting name="faris" fontSize={30}>
// //           {" "}
// //           <p>Style i svasta nesto</p>
// //         </Greeting>
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import Kartica from "./components/Card/Card";
// import "./components/Card/Card.css";
// // import "./App.css";
// // import BkngCard from "./components/BkngCard/BkngCard";

// export default function App() {
//   return (
//     //
// {/* <Kartica
//         image={"https://www.w3schools.com/howto/img_avatar.png"}
//         name="John Doe"
//         occupation="Software Engineer"
//         verification={true}
//       />
//       <Kartica
//         image={"https://www.w3schools.com/howto/img_avatar2.png"}
//         name="John Doe"
//         occupation="Lawyer"
//         verification={false}
//       />
//       <Kartica name={"Aldin"} verification />
//       <Kartica name={"Denis"} verification={false} /> */}
//     <div className="card-container">

//     </div>
//   );
// }

// import React from "react";
// import "./App.css";

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// export default function App() {
//   return (
//     <div className="card-container">
//       {people.map((p) => (
//         <span>{p}</span>
//       ))}
//     </div>
//   );
// }

// U RETURN IDE SAMO MAP ILI CONDICIONAL
// TO JE TO ZA SVE OSTALO

//8.15

// import React, { useState } from "react";
// import "./App.css";
// import Greeting from "./components/Greeting/Greeting";
// import Incrementer from "./components/Incrementer/Incrementer";

// export default function App() {
//   const sayHello = (name) => {
//     alert(`Hello ${name}`);
//   };

//   const handleClick = () => {
//     alert(`Ova funkcija se nalazi u App js`);
//   };

//   //clickevent
//   //onchangeevent
//   //onsubmit

//   //LIFTING STATEUP
//   //RERENDER

//   // onClick na svaki elemnt moze da se prosledi

//   //SA ATRIBUTOM,PRAVI SE DRUGA FUNKCIJA
//   // let count = 0;
//   const [count, setCount] = React.useState(0);
//   // const [naesto, setNesto] = useState()

//   const countIncrease = () => {
//     setCount((prev) => prev + 1);
//   };

//   return (
//     // <div className="card-container">
//     //   <button onClick={sayHello}>Click me</button>
//     // </div>
//     <div>
//       <Incrementer />
//     </div>
//   );
// }
// <div className="card-container">
// {
/* <button onClick={() => sayHello("John")}>Click me</button>
      <button
        onClick={() => {
          console.log("Alkajslkdjlskdj");
        }}
      >
        alksdjaklsdj
      </button>
      <hr></hr> */
// }
// {count}
// <button onClick={countIncrease}>Increase</button>
// {
/* <button onClick={() => count++}> Increase </button> */
// }
// {
/* <Greeting name="Aldin" handleParentClick={handleClick} /> */
// }
// </div>

import React from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Practice from "./components/Practice/Practice";

export default function App() {
  const sayHello = () => {
    alert("SAD JE ALDIN");
  };
  return (
    <div className="card-container">
      <button onClick={sayHello}>Click</button>
      <br></br>
      <Practice clickHandler={sayHello} />
      <br></br>
      {/* <Greeting clickHandler={sayHello} /> */}
    </div>
  );
}
