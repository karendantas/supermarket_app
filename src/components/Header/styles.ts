import { theme } from "@/constants/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 50px;
  padding-inline: 22px;
  position: relative;
`;

export const BagContainer = styled.View`
  background-color: ${theme.colors.background};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`;

export const CartQuantityContainer = styled.View`
  background-color: ${theme.colors.primary};
  height: 20px;
  width: 20px;
  align-items: center;
  border-radius: 999px;
  position: absolute;
  top: -10px;
  right: -5px;
`;
