import Title from "./Title";

export default function RightCard(props) {
    const {icone, alternative, titre} = props;
    return (
      <div className="rightWidget">
        <Title icone={icone} alternative={alternative} titre={titre}/>
        {props.children}
          {/* <img className="iconWidg" src={props.icone} width="50px" height="50px" alt={props.alternative}/>
          <h3>{props.titre}</h3> */}
      </div>
    );
  }