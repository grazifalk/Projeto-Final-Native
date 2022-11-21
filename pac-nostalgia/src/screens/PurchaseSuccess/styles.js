import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #689999;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  position: absolute;
  width: 341px;
  height: 467px;
  border-radius: 10px;
  color: ${colors.card};
  opacity: 0.25;
  align-items: center;
  justify-content: center;
`;

export const Fireworks = styled.Image`
  width: 163px;
  height: 147.08px;
  margin-bottom: 50px;
`;

export const Message = styled.Text`
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.tertiary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  margin-left: 50px;
  margin-right: 50px;
`;