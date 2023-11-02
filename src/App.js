import './App.css';
import Header from './Components/Header/Header';
import NewEntry from './Components/NewEntry/NewEntry';
import List from './Components/List';

function App() {

  const addListHandler = entry => {
    console.log(entry);
  }

  return (
    <div className="App">
      <Header />
      <NewEntry onAddEntry={addListHandler} />
      <List />
    </div>
  );
}

export default App;
