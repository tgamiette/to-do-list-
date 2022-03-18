// import logo from './logo.svg';
import './App.css';
import List from "./List";
import Form from "./FormList";
import {useState} from "react";

function App() {


  const [lists, setLists] = useState([{
    id: 1, titre: "Titre1", description: "Description1", status:"pending",
  }, {
    id: 2, titre: "Titre2", description: "Description2", status:"pending"
  }, {
    id: 3, titre: "Titre3", description: "Description3", status:"pending"
  }, {
    id: 4, titre: "Titre4", description: "Description4",status:"pending"
  }])
  return (<div className="App">
    <Form setLists={setLists}/>

    {lists.map((list) => (
      <List setLists={setLists} Title={list.title} Description={list.description} key={list.id} id={list.id} status={list.status}/>))}
  </div>);
}

export default App;
