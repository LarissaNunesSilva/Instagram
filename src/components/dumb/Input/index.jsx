import * as Styled from "./styled";

function Input(props) {
  return (
    <Styled.Input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
