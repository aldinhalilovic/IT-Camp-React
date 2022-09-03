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

// import React from "react";
// import "./App.css";
// import Greeting from "./components/Greeting/Greeting";
// import Practice from "./components/Practice/Practice";

// export default function App() {
//   const sayHello = () => {
//     alert("SAD JE ALDIN");
//   };
//   return (
//     <div className="card-container">
//       <button onClick={sayHello}>Click</button>
//       <br></br>
//       <Practice clickHandler={sayHello} />
//       <br></br>
//       <h1>alskdj</h1>
//     </div>
//   );
// }

// 17.8

// import React, { useState } from "react";
// import "./App.css";

// export default function App() {
//   // const [name, setName] = React.useState("");
//   // const [email, setEmail] = React.useState("");
//   // const [hobi, setHobi] = React.useState("");
//   // const [password, setPassword] = useState("");
//   const [formValues, setFormValues] = useState({
//     //USESTATE za FORME, da se ne bi kucalo redom....
//     name: "",
//     email: "",
//     hobi: "",
//     password: "",
//     publicPassword: {
//       first: "FIRST",
//       second: "",
//     },
//   });

//   return (
//     <div className="card-container">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(
//             // formValues
//             `Name: ${formValues.name}, Email: ${formValues.email}, Hobi: ${formValues.hobi}, Password : ${formValues.password}`
//           );
//         }}
//       >
//         <label htmlFor="html">Name</label>
//         <input
//           type="text"
//           id="html"
//           name="fav_language"
//           value={formValues.name}
//           onChange={(e) =>
//             setFormValues((prevState) => ({
//               ...prevState,
//               name: e.target.value,
//             }))
//           }
//         />
//         <br />
//         <br />
//         <label htmlFor="css">Email</label>
//         <input
//           type="email"
//           id="css"
//           name="fav_language"
//           value={formValues.email}
//           onChange={(e) =>
//             setFormValues((prev) => ({
//               ...prev,
//               email: e.target.value,
//             }))
//           }
//         />
//         <br />
//         <br />
//         <label htmlFor="javascript">Hobi</label>
//         <input
//           type="text"
//           id="javascript"
//           name="fav_language"
//           value={formValues.hobi}
//           onChange={(e) =>
//             setFormValues((prev) => ({
//               ...prev,
//               hobi: e.target.value,
//             }))
//           }
//         />
//         <br />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="fav_language"
//           value={formValues.password}
//           onChange={(e) =>
//             setFormValues((prev) => ({
//               ...prev,
//               password: e.target.value,
//               publicPassword: {
//                 ...formValues.publicPassword,
//                 second: formValues.hobi,
//               },
//             }))
//           }
//         />
//         <br />
//         {/* <p>{formValues.publicPassword.second}</p> */}
//         <br />
//         <input type="submit" defaultValue="Submit" />
//       </form>
//     </div>
//   );
// }
// 19.8

// import React, { useState } from "react";
// import "./App.css";

// const DATA = [
//   "Prva recenica",
//   "Druga recenica",
//   "Treca recenica",
//   ".....",
//   "Stota recenica",
// ];

// export default function App() {
//   const [array, setArray] = useState(DATA);
//   // 1.
//   const generateRandom = () => Math.random().toString(36).slice(2, 7);
//   // 2.
//   const reverseArray = () => {
//     const _array = [...array]; //kopija niza
//     const reversed = _array.reverse();
//     setArray(reversed);
//   };
//   //sablon za nizove

//   return (
//     <div className="card-container">
//       <button onClick={() => setArray((prev) => [generateRandom(), ...prev])}>
//         Dodaj random recenicu
//       </button>
//       <br />
//       <button onClick={reverseArray}>Reverse recenice</button>
//       <ul>
//         {array.map((el) => (
//           <li key={el}>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./App.css";
// import TeamCard from "./components/TeamCard/TeamCard";

// const favoriteTeams = [
//   { id: 0, name: "Arsenal", points: 6 },
//   { id: 1, name: "Man City", points: 6 },
//   { id: 2, name: "Man United", points: 0 },
//   { id: 3, name: "Liverpool", points: 2 },
//   { id: 4, name: "Pazar", points: 9 },
//   { id: 5, name: "Partizan", points: 5 },
// ];

// export default function App() {
//   const [teams, setTeams] = useState(favoriteTeams);
//   const deleteTeam = (id) => {
//     const newTeams = teams.filter((team) => team.id !== id);
//     setTeams(newTeams);
//   };

//   return (
//     <div className="card-container">
//       {/* <button
//         onClick={() =>
//           setTeams((prev) => [
//             ...prev,
//             { id: Math.random, name: "Novi Tim Pazar", points: 4 },
//           ])
//         }
//       />
//       {teams.map((team) => (
//         <div key={team.id}>
//           <TeamCard
//             name={team.name}
//             points={team.points}
//             onDeleteBtn={() => deleteTeam(team.id)}
//           />
//         </div>
//       ))} */}
//     </div>
//   );
// }

// CryptoForm komponenta
// sadrzava IME VALUTE, CENA, pored toga DUGME

// import React, { useEffect, useState } from "react";
// import "./App.css";

// export default function App() {
//   const [number, setNumber] = useState(0);
//   const [name, setName] = useState("Aldin");

//   useEffect(() => {
//     console.log("pozovi");
//   }, [name]);
//   return (
//     <div className="card-container">
//       {number}
//       <button onClick={() => setNumber(Math.random())}>Promeni broj</button>
//       {name}
//       <button onClick={() => setName(Math.random())}>Promeni IME</button>
//     </div>
//   );
// }

// kad se mounta komponenta, da se prikupe podaci, da se podaci sa servera nedje ubace(u state)

// funkcija get hosts, treba da se mapira taj ceo objekat
//POST ITEM KOMPONENTA

// import React from "react";
// import "./App.css";
// import PostList from "./components/PostList/Postlist";

// const App = () => {
//   return (
//     <div>
//       <PostList />
//     </div>
//   );
// };

// export default App

// const BASE_URL = "https://api.quotable.io";

// const App = () => {
//   const [authors, setAuthors] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState();
//   const [loadingPage, setLoadingPage] = useState(true);

//   function getAuthors(page) {
//     setLoadingPage(true);
//     try {
//       axios
//         .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}`)
//         .then((res) => {
//           setCurrentPage(res.data.page);
//           setTotalPages(res.data.totalPages);
//           setAuthors(res.data.results);
//         });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoadingPage(false);
//     }
//   }

//   useEffect(() => {
//     getAuthors(currentPage);
//   }, [currentPage]);
//   return (
//     <div className="card-container">
//       <h1>Axios is installed</h1>
//       <h1>
//         Page {currentPage} / {totalPages}
//       </h1>
//       <button onClick={() => setCurrentPage((prev) => prev + 1)}>
//         Next page
//       </button>
//       {!loadingPage ? (
//         <div>
//           {authors.map((el) => (
//             <div key={el._id}>
//               <h3>{el.name}</h3>
//               <h4>{el.description}</h4>
//               <p>{el.bio}</p>
//               <p>Quote count : {el.quoteCount}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <h1>Loading page...</h1>
//       )}
//     </div>
//   );
// };

// export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import AxiosPractice from "./components/AxiosPractice/AxiosPractice";

const BASE_URL = "https://api.quotable.io";

const App = () => {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [page, setPage] = useState();
  const [formPage, setFormPage] = useState(1);

  const getData = () => {
    axios
      .get(`${BASE_URL}/quotes?order=asc`)
      .then((res) => setData(res.data.results));
  };

  const getSecondData = (page) => {
    axios
      .get(`${BASE_URL}/quotes?order=asc&page=${page}&limit=10`)
      .then((res) => setSecondData(res.data.results));
  };

  useEffect(() => {
    getData();
    getSecondData(page);
  }, [page]);

  console.log(page);
  return (
    <div>
      {/* <div className="navi">
        <div className="buttons">
          <button
            className="previouse"
            disabled={page === 1}
            onClick={() => {
              setPage((prev) => (prev -= 1));
            }}
          >
            Click me Previouse
          </button>

          <h1>Page : {page}</h1>

          <button
            className="next"
            onClick={() => {
              setPage((prev) => (prev += 1));
            }}
          >
            Click me Next
          </button>
        </div>
      </div> */}

      <div className="input-sector">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPage(formPage);
            setFormPage("");
          }}
        >
          <input
            placeholder="Unesi stranu"
            value={formPage}
            onChange={(e) => {
              // e.preventDefault();
              setFormPage(() => e.target.value);
            }}
          ></input>
        </form>
      </div>

      <div className="card-container">
        <div className="card">
          {secondData.map((el) => (
            <AxiosPractice key={el.id} author={el.author} quote={el.content} />
          ))}
        </div>
        <div className="card-right">
          {data.map((el) => (
            <AxiosPractice key={el.id} author={el.author} quote={el.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
