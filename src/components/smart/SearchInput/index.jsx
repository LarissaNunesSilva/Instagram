import Input from "../../dumb/Input";

function SearchInput(props) {
  return (
    <Input
      placeholder="Pesquisar"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default SearchInput;
