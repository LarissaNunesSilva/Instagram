import * as Styled from "./styled";
import PostFeed from "../../components/dumb/Post";
import gatoPersa from "../../assets/gato-persa.jpg";
import maineCoon from "../../assets/maine-coon.jpg";

function Feed() {
  return (
    <>
      <Styled.Container>
        <PostFeed
          profile={{ name: "Gato Persa", picture: gatoPersa }}
          post={gatoPersa}
          description="Se alongando ao ar livre!"
          pastTime="12 dias atrás"
        />
        <PostFeed
          profile={{ name: "Maine Coon", picture: maineCoon }}
          post={maineCoon}
          description="Dando uma volta para aquecer as patas."
          pastTime="15 dias atrás"
        />
      </Styled.Container>
    </>
  );
}

export default Feed;
