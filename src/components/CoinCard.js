// import React, { useContext, useState } from "react";
// import { appContext } from "./Context";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// function CoinCard({ name, price, marketCap }) {
//   //   const { setModalData } = useContext(appContext);
//   const [coinValue, setCoinValue] = useState(1);
//   const [coinAdded, setCoinAdded] = useState(false);
//   console.log(coinAdded);
//   //   console.log(coinValue);
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "85vw",
//         justifyContent: "space-between",
//       }}
//     >
//       <h1>Ime : {name}</h1>
//       <h2>CENA : {Number(price).toLocaleString()}</h2>
//       <h2>marketCap {Number(marketCap).toLocaleString()}</h2>
//       {!coinAdded ? (
//         <div>
//           <input type="checkbox" onChange={() => setCoinAdded(true)}></input>
//           <label>Scales</label>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="checkbox"
//             onChange={() => {
//               setCoinAdded(false);
//             }}
//             checked
//           ></input>
//           <label>Scales</label>
//         </div>
//       )}
//       {coinAdded ? (
//         <input
//           value={coinValue}
//           onChange={(e) => setCoinValue(e.target.value)}
//           type={"number"}
//           style={{
//             width: "50px",
//             height: "50px",
//             marginTop: "20px",
//           }}
//         />
//       ) : (
//         <input
//           readOnly
//           type={"number"}
//           value={coinValue}
//           style={{
//             width: "50px",
//             height: "50px",
//             marginTop: "20px",
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default CoinCard;

import React, { useState } from "react";

function CoinCard() {
  const [coinAdded, setCoinAdded] = useState(false);
  return (
    <div className="flex">
      <div className="w-20 h-24">
        <div className="flex justify-center items-center">RANK</div>
      </div>
      <div className="w-60 h-24  flex flex-col justify-center items-center">
        <img width={40} alt="symbol" />
        NAME
        <hr />
      </div>
      <div className="w-60 h-24">
        <div className="flex justify-center items-center">PRICE</div>
      </div>
      <div className="w-60 h-24">
        <div className="flex justify-center items-center">marketCap</div>
      </div>
      <div className="w-60 h-24">
        <div className="flex justify-center items-center">
          {!coinAdded ? (
            <div>
              <input
                type="checkbox"
                onChange={() => setCoinAdded(true)}
              ></input>
              <label>Scales</label>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setCoinAdded(false);
                }}
                checked
              ></input>
              <label>Scales</label>
            </div>
          )}
        </div>
      </div>
      <div className="w-60 h-24 ">
        <input
          className=" w-14 h-14 mt-5 border-black border-2"
          type={"number"}
        />
      </div>
    </div>
  );
}

export default CoinCard;
