import { theme } from "@/constants/theme";
import styled from "styled-components/native";

export const CategoryButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding-inline: 8px;
  border-radius: 8px;
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
