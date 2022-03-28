import * as Styled from "./styled";

function Input(props) {
  return (
    <Styled.Input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
    />
  );
}

export default Input;
