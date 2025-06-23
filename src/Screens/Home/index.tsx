import { Categories } from "@/components/Categories";
import { Header } from "@/components/Header";
import { Heading3 } from "@/components/Typography";
import { CategoriesContainer, Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header userName="Karen" cartQuantity={10} />

      <CategoriesContainer>
        <Heading3>Categorias</Heading3>
        <Categories />
      </CategoriesContainer>
    </Container>
  );
}
