export default function List({Title, Description, id, setLists, status}) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
          <p className="card-text">{Description}</p>
          <button value={id} className={"btn btn-dark"} onClick={() => {
            Done(setLists, id)
          }}>Tache Terminé
          </button>
          <button value={id} className={"btn btn-dark"} onClick={() => {
            Delete(setLists, id)
          }}>Supprimer
          </button>
        </div>
      </div>
    </div>
  );

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
