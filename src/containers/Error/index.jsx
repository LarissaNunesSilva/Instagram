import Title from "../../components/dumb/Title";
import Text from "../../components/dumb/Text";
import Link from "../../components/dumb/Link";
import Header from "../../components/smart/Header";
import Footer from "../../components/dumb/Footer";

function Error() {
  return (
    <>
      <Title>Esta página não está disponível.</Title>
      <Text>
        O link em que você clicou pode não estar funcionando, ou a página pode
        ter sido removida.
      </Text>
      <Link href="/">Voltar para o Instagram.</Link>
      <Footer>
        <Link href="https://about.facebook.com/meta">Meta</Link>
        <Link href="https://about.instagram.com/">Sobre</Link>
        <Link href="https://about.instagram.com/blog/">Blog</Link>
        <Link href="https://www.instagram.com/about/jobs/">Carreiras</Link>
        <Link href="https://help.instagram.com/">Ajuda</Link>
        <Link href="https://developers.facebook.com/docs/instagram">API</Link>
        <Link href="https://www.instagram.com/legal/privacy/">Privacidade</Link>
        <Link href="https://www.instagram.com/legal/terms/">Termos</Link>
        <Link href="https://www.instagram.com/directory/profiles/">Principais contas</Link>
        <Link href="https://www.instagram.com/directory/hashtags/">Hashtags</Link>
        <Link href="https://www.instagram.com/explore/locations/">Localizações</Link>
      </Footer>
    </>
  );
}

export default Error;
