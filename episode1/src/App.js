import './App.css';

function App() {
  const name = "Tyson";
  const age = 28;
  const email = "yngu4822@gmail.com";
  const user = 
  <div>
    <p>{name}</p>
    <p>{age}</p>
    <p>{email}</p>
  </div>;

  return (
  <div className='App'>
    {user}
  </div>);
}


export default App;
