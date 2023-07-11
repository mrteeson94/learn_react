import './App.css';

function App() {
  return(
    <div className='App'>Hello World</div>
  );
}

export default App;

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