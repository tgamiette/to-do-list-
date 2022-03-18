// import logo from './logo.svg';
import './App.css';
import List from "./List";
import Form from "./FormList";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css"

function App() {


  const [lists, setLists] = useState([{
    id: 1, titre: "Titre1", description: "Description1", status: "pending",
  }, {
    id: 2, titre: "Titre2", description: "Description2", status: "pending"
  }, {
    id: 3, titre: "Titre3", description: "Description3", status: "pending"
  }, {
    id: 4, titre: "Titre4", description: "Description4", status: "pending"
  }])
  return (<div className="App">
      <Form setLists={setLists}/>
      <div style={{display: '-webkit-inline-box'}} className="card-group">
        {lists.map(list =>
          <List setLists={setLists} Title={list.title} Description={list.description} key={list.id} id={list.id}
                status={list.status}/>)}
      </div>
    </div>
  );
}

export default App;
