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

// AXIOS CAS

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

// AXIOS PRIMER

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import AxiosPractice from "./components/AxiosPractice/AxiosPractice";

// const BASE_URL = "https://api.quotable.io";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [secondData, setSecondData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [formPage, setFormPage] = useState(1);

//   const getData = () => {
//     axios
//       .get(`${BASE_URL}/quotes?order=asc`)
//       .then((res) => setData(res.data.results));
//   };

//   const getSecondData = (page) => {
//     axios
//       .get(`${BASE_URL}/quotes?order=asc&page=${page}&limit=10`)
//       .then((res) => setSecondData(res.data.results));
//   };

//   useEffect(() => {
//     getData();
//     getSecondData(page);
//   }, [page]);

//   console.log(page);
//   return (
//     <div>
//       <div className="navi">
//         <div className="buttons">
//           {/* <button
//             className="previouse"
//             disabled={page === 1}
//             onClick={() => {
//               setPage((prev) => (prev -= 1));
//             }}
//           >
//             Click me Previouse
//           </button> */}

//           <h1>Page : {page}</h1>

//           {/* <button
//             className="next"
//             onClick={() => {
//               setPage((prev) => (prev += 1));
//             }}
//           >
//             Click me Next
//           </button> */}
//         </div>
//       </div>

//       <div className="input-sector">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setPage(formPage);
//             setFormPage("");
//           }}
//         >
//           <input
//             placeholder="Unesi stranu"
//             value={formPage}
//             onChange={(e) => {
//               // e.preventDefault();
//               setFormPage(() => e.target.value);
//             }}
//           ></input>
//         </form>
//       </div>

//       <div className="card-container">
//         <div className="card">
//           {secondData.map((el) => (
//             <AxiosPractice key={el.id} author={el.author} quote={el.content} />
//           ))}
//         </div>
//         <div className="card-right">
//           {data.map((el) => (
//             <AxiosPractice key={el.id} author={el.author} quote={el.content} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import * as React from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import "./App.css";
// import { useAutocomplete } from "@mui/material";

// function App() {
//   const [number, setNumber] = React.useState(1);
//   return (
//     <div className="card-container">
//       {number}
//       <ButtonGroup size="large">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setNumber((prev) => prev + 1)}
//         >
//           increase
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           style={{
//             marginLeft: 20,
//           }}
//         >
//           Hello World
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// }

// bulma, chakra, ..... mantin, next ui, material kit,

// drible za informacije, inspiraciju
// uzima se everything
// mora paginacija
// navbar od 4 dugmeta
// po izboru teme,
// dole u stranicu  ima 3 kartice, 3 vesti
// paginacija na donjem delu stranice
// heder komponenta
// komponenta za karticu i paginaciju
//

// 9/9/2022
// react router dom instalirali

// const active = {
//   color: "#fbf3f2",
//   textDecoration: "none",
//   marginLeft: 20,
//   transition: "0.3s",
// };
// const navigate = useNavigate();
// const [color, setColor] = useState("blue");
// async function getMovies() {
//   const res = await axios.get(
//     `https://imdb-api.com/en/API/SearchMovie/k_w7k9gevm/fast`
//   );
//   console.log(res.data);
// }

// useEffect(() => {
//   getMovies();
// }, []);

// import React, { createContext, useContext, useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
// import { Bar, Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// export const UserContext = createContext();

// function App() {
//   const [data, setData] = useState([]);

//   const options = {
//     method: "GET",
//     url: `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd`,
//     params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
//     headers: {
//       "X-RapidAPI-Key": "4f0338cc68mshdb53cc86cfb2e35p19f053jsn63ffee5719a2",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   };
//   const getData = () => {
//     axios.request(options).then(function (response) {
//       console.log(response.data.data.coin);
//       setData(response.data.data.coin.sparkline);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="card-container">
//       <div
//         style={{
//           width: "100px",
//           height: "20px",
//         }}
//       >
//         <Sparklines data={data.map((el) => el)}>
//           <SparklinesLine color="teal" />
//         </Sparklines>
//       </div>
//     </div>
//   );
// }
/* <nav className="navbar">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          <h1>Main Page </h1>
        </NavLink>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          <h1>Home</h1>
        </NavLink>

        <NavLink
          to="team"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          <h1>Team Page</h1>
        </NavLink>
      </nav>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="about" element={<h1>About Page</h1>} /> */

//     <Route path="home" element={<HomePage />} />
//     <Route path="team/single" element={<SinglePage />} />
//     <Route path="team" element={<TeamPage />} />
//   </Routes>
// </UserContext.Provider> */}
// );
// }
// export default App;

import React, { useContext, useState } from "react";
import CoinCard from "./components/CoinCard";
import { appContext } from "./components/Context";

function App() {
  const { modalData, coinValue } = useContext(appContext);
  console.log(modalData);
  const [list, setList] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!list ? (
        <div>
          {modalData.slice(0, 2).map((el) => (
            <div key={el.uuid}>
              <CoinCard
                name={el.name}
                price={el.price}
                marketCap={el.marketCap}
              />
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {modalData.slice(0, 2).map((el) => (
            <div key={el.uuid}>
              <h1>{el.name}</h1>
              <h2>{Number(el.price).toLocaleString()}</h2>
            </div>
          ))}
        </div>
      )}

      {/* {modalData.slice(0, 2).map((el) => (
        <div key={el.uuid}>
          <CoinCard name={el.name} price={el.price} marketCap={el.marketCap} />
          <hr />
        </div>
      ))} */}
      <button
        style={{
          width: "50px",
        }}
        onClick={() => setList(true)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
