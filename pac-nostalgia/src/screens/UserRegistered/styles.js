import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  position: absolute;
  width: 329px;
  height: 363px;
  left: 32px;
  top: 190px;
  border-radius: 10px;
  background: ${colors.card};
  align-items: center;
  justify-content: center;
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

export const StButton = styled.TouchableOpacity`
  width: 303px;
  height: 47px;
  background: ${colors.buttonColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  top: 50px;
`;

export const TextButton = styled.Text`
  color: ${colors.textButtonColor};
  font-weight: 700;
  font-size: 18px;
  position: absolute;
`;
