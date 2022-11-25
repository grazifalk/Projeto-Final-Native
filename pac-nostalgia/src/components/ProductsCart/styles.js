import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
width: 302.11px;
height: 109.72px;
border-radius: 10px;
background: ${colors.card};
`;

export const ImageContainer = styled.Image`

`;

export const ImageProduct = styled.Image`
width: 97.68px;
height: 88.99px;
border-radius: 10px;
`;

export const Title = styled.Text`
font-family: 'Inter';
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${colors.textButtonColor};
`;

export const ProductContent = styled.View`

`;