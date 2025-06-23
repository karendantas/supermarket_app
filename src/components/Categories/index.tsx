import { FlatList } from "react-native";
import { Body } from "../Typography";
import { CategoryButton } from "./styles";

const categories = ["Comida", "Fruta", "Verdura", "PIPOS", "lala"];
export function Categories() {
  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={{
        gap: 12,
        paddingTop: 12,
      }}
      renderItem={(item) => (
        <CategoryButton>
          <Body style={{ color: "#FFFF" }}>{item.item}</Body>
        </CategoryButton>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
