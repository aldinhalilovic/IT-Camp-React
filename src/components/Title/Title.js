import React from "react";

// const Title = (props) => {
//     console.log(props)

//     return <h3>
//         Zdravo {props.name}, imas {props.age} godina
//     </h3>
// };

const Title = ({ name, age, clickHandler }) => {
  // console.log(props)

  return <h3 onClick={clickHandler}>Zdravo</h3>;
};

export default Title;

// kako se pokrece, sta je komponenta, promps, css unutar reakta,
// beta react,learn describing
