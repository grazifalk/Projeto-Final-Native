import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  flex-direction: column;
  background-color: ${colors.card};
  width: 220px;
  height: 125px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 15px;
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
`;

export const TextContainer = styled.View`
  width: 170px;
  margin-top: 10px;
`;

export const Name = styled.Text`
  color: ${colors.tertiary};
  font-family: 'Inter';
  font-weight: 400;
  font-size: 24px;
  text-align: center;
`;

