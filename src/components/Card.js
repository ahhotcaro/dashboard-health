

export default function Card(props) {
    return (
      <div className="card">
          <img src={props.icone} width="50px" height="50px" alt={props.alternative}/>
          <h2>{props.titre}</h2>
      </div>
    );
  }