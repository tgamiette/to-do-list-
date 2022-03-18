import './App.css'

export default function List({Title, Description, id, setLists, status}) {

  const doneClass = 'success'
  const todoClass = 'warning'
  let classname = todoClass
  if (status === 'done') {
    classname = doneClass
  }

  // <div className="card border-warning mb-3" style="max-width: 18rem;">
  //   <div className="card-header">Header</div>
  //   <div className="card-body text-warning">
  //     <h5 className="card-title">Warning card title</h5>
  //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
  //       content.</p>
  //   </div>
  return (
    <div className={'card mb-3 border-' + classname} style={{maxWidth: 150}}>
      <div className="card-header">{status}</div>
       <div className={"card-body text-" + classname}>
       <h5 className="card-title">{Title}</h5>
       <p className="card-text">{Description}</p>
       </div>
        <button value={id} className={"btn btn-dark"} onClick={() => {
          Done(setLists, id)
        }}>Tache Terminé
        </button>
        <button value={id} className={"btn btn-dark"} onClick={() => {
          Delete(setLists, id)
        }}>Supprimer
        </button>
    </div>
  )
    ;

  function Done(setLists, id) {
    setLists(prev => {
      return prev.filter(list => {
        if (list.id === id) {
          list.status = "done"
        }
        return list
      })
    });
  }

  function Delete(setLists, id) {
    setLists(prev => {
      return prev.filter(list => list.id !== id)
    });
  }
}
