import * as Styled from "./styled";
import Button from "../../dumb/Button";
import SearchInput from "../SearchInput";
import logoSrc from "../../../assets/logo.png";

function Header() {
  return (
    <>
      <Styled.Header>
        <Styled.Image src={logoSrc} />
        <SearchInput />
        <div>
          <Button>Entrar</Button>
          <Button>Cadastre-se</Button>
        </div>
      </Styled.Header>
    </>
  );
}

export default Header;
