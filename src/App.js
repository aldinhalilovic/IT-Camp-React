// import logo from "./logo.svg";
// import "./App.css";
// import Title from "./components/Title/Title";
// import Greeting from "./components/Greeting/Greeting";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Title name="Aldin" age={21} nekiProp={true} />
//         <Greeting name="faris" fontSize={30}>
//           {" "}
//           <p>Style i svasta nesto</p>
//         </Greeting>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Kartica from "./components/Card/Card";

// export default function App() {
//   return (
//     <div className="card-container">
//       <Kartica
//         image={"https://www.w3schools.com/howto/img_avatar.png"}
//         name="John Doe"
//         occupation="Software Engineer"
//       />
//       <Kartica
//         image={"https://www.w3schools.com/howto/img_avatar2.png"}
//         name="John Doe"
//         occupation="Lawyer"
//       />
//       <Kartica />
//       <Kartica />
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import BkngCard from "./components/BkngCard/BkngCard";

export default function App() {
  return (
    <div>
      <BkngCard />
      <BkngCard />
      <BkngCard />
      <BkngCard />
      <BkngCard />
      <BkngCard />
      <BkngCard />
      <BkngCard />
    </div>
  );
}
