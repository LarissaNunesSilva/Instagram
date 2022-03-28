import * as Styled from './styled'

function SearchInput(props) {
  return (
    <Styled.SearchInput
      placeholder="Pesquisar"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default SearchInput;
