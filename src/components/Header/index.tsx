import { Text, View } from "react-native";

import Bag from "@/assets/icons/bag.svg";
import { Body, Heading2 } from "../Typography";
import { BagContainer, CartQuantityContainer, Container } from "./styles";

interface HeaderProps {
  userName: string;
  cartQuantity: number;
}
export function Header({ userName, cartQuantity }: HeaderProps) {
  return (
    <Container>
      <View>
        <Body>Boas vindas,</Body>
        <Heading2>{userName}!</Heading2>
      </View>

      <BagContainer>
        <Bag />

        {cartQuantity > 0 && (
          <CartQuantityContainer>
            <Text>{cartQuantity}</Text>
          </CartQuantityContainer>
        )}
      </BagContainer>
    </Container>
  );
}
