

export default function Card(props) {
    return (
      <div className="card">
          <img class="iconWidg" src={props.icone} width="50px" height="50px" alt={props.alternative}/>
          <h3>{props.titre}</h3>
      </div>
    );
  }