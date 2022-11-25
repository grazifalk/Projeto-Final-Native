import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${colors.tertiary};
`;
