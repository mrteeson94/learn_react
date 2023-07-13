// 1. Learning Components and props
// function App() {
//   return (
//   <div className='App'>
//     <Job salary={125000} position="Full-stack Developer" company="Google" />
//     <Job salary={140000} position="Software Developer" company="Microsoft" />
//     <Job salary={140000} position="Application Developer" company="Apple" />
//   </div>);
// }

// const Job = (props) => {
//   return(
//   <div>
//     <h1>{props.position}</h1>
//     <p>{props.salary}</p>
//     <p>{props.company}</p>
//   </div>)
// };

//2. Ternary Operators in react
// function App() {
//   const age = 17;
//   const isGreen = true;
//   return(
//     <div className='App'>{age >= 18 ? <h2>Over age</h2> : <h2>Under age</h2>}
//         <h1 style={{color: isGreen ? "green" : "red"}}>COLOR TEXT</h1>
//     </div>
//   );
// }

//3. Manipulating objects with list and components for clean code
// function App() {
//     const planets = [
//       {name: "Mars", isGasPlanet: false},
//       {name: "Earth", isGasPlanet: false},
//       {name: "Jupiter", isGasPlanet: true},
//       {name: "Venus", isGasPlanet: true},
//       {name: "Neptune", isGasPlanet: true},
//       {name: "Uranus", isGasPlanet: true},
//     ];
    
//     return(
//       <div className='App'>
//         {planets.map((planet,key) => {
//          return(         
//           planet.isGasPlanet && <h1>{planet.name}</h1>)
//           })}
//       </div>
//     );
//   }

//4. useState textbox example showing live input results
// function App() {
//     const [inputValues, setInputValues] = useState("");
    
//       const handleInputValues = (event) => {
//         setInputValues((event.target.value))
//       };
//       return(
//         <div className='App'>
//           <input type="text" onChange={handleInputValues}/>
//           {inputValues}
//         </div>
//       );
//     }