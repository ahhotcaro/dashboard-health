// set Card to reuse components (widgets)
import Title from "./Title";

export default function Card(props) {
  const { icone, alternative, titre } = props;
  return (
    <div className="littleWidget">
      <Title icone={icone} alternative={alternative} titre={titre} />
      {props.children}
    </div>
  );
}
