// import components
import Title from "./Title";

// create a card for the right side to reuse components
export default function RightCard(props) {
  const { icone, alternative, titre } = props;
  return (
    <div className="rightWidget">
      <Title icone={icone} alternative={alternative} titre={titre} />
      {props.children}
    </div>
  );
}
