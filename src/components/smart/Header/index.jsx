import * as Styled from "./styled";
import Button from "../../dumb/Button";
import Image from "../../dumb/Image";
import SearchInput from "../SearchInput";
import logoSrc from "../../../assets/logo.png";

function Header() {
  return (
    <>
      <Styled.Header>
        <Image src={logoSrc} />
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
