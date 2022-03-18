import react, {Component} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default class Form extends Component {
  nb_max = 10
  setLists = this.props.setLists;
  getDescription = (e) => {
    this.setState({description: e.target.value})
  }
  getTitle = (e) => {
    this.setState({title: e.target.value})
  }

  //TODO faut m'expliquer la
  result = 0;

  handleSubmit(event) {

    event.preventDefault();

    const newItem = {
      id: generateUniqueID(),
      title: this.state.title,
      description: this.state.description,
      status: "pending"
    };
    // throw new Error(newItem)

    this.setLists(prev => {
      const result = prev.filter(task => task.status === 'pending')
      // console.log(result.length)
      // console.log(this.nb_max)
      if ((result.length) <= (this.nb_max)) {
        return [...prev, newItem]
      } else {
        alert("fini d'abord")
        return prev
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className={"form-control"} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Titre de la tache</label>
          <input type="text" className="form-control" id="Title" placeholder="Titre" onChange={this.getTitle}/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description de la tache </label>
          <input type="text" className="form-control" id="Description" placeholder="Précision sur la tâche"
                 onChange={this.getDescription}/>
        </div>
        <button className="btn btn-primary" type="submit">Ajouter</button>
      </form>
    );
  }
}
