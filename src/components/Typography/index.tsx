import { theme } from "@/constants/theme";
import styled from "styled-components/native";

export const Heading1 = styled.Text`
  color: ${theme.colors.textPrimary};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.heading1.fontSize}px;
  font-weight: ${theme.typography.heading1.fontWeight};
  line-height: ${theme.typography.heading1.lineHeight}px;
`;

export const Heading2 = styled(Heading1)`
  font-size: ${theme.typography.heading2.fontSize}px;
  font-weight: ${theme.typography.heading2.fontWeight};
  line-height: ${theme.typography.heading2.lineHeight}px;
`;

export const Heading3 = styled(Heading1)`
  font-size: ${theme.typography.heading3.fontSize}px;
  font-weight: ${theme.typography.heading3.fontWeight};
  line-height: ${theme.typography.heading3.lineHeight}px;
`;

export const Body = styled.Text`
  color: ${theme.colors.textSecondary};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body.fontSize}px;
  font-weight: ${theme.typography.body.fontWeight};
  line-height: ${theme.typography.body.lineHeight}px;
`;

export const BodyBold = styled(Body)`
  font-weight: ${theme.typography.bodyBold.fontWeight};
`;

export const Caption = styled.Text`
  color: ${theme.colors.textSecondary};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.caption.fontSize}px;
  font-weight: ${theme.typography.caption.fontWeight};
  line-height: ${theme.typography.caption.lineHeight}px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.background};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.button.fontSize}px;
  font-weight: ${theme.typography.button.fontWeight};
  line-height: ${theme.typography.button.lineHeight}px;
  letter-spacing: ${theme.typography.button.letterSpacing}px;
  text-transform: ${theme.typography.button.textTransform};
`;
