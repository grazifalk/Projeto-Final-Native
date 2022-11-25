import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Up = styled.View`
  width: 100%;
  height: 77px;
  background-color: ${colors.secondary};
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  justify-content: space-between;
  padding-right: 12px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  top: 0.1px;
  width: 200px;
  height: 250px;
`;

export const Card = styled.View`
  position: absolute;
  width: 330px;
  height: 250px;
  left: 32px;
  top: 100px;
  border-radius: 10px;
  background: ${colors.card};
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-family: "Inter";
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.tertiary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  margin-left: 50px;
  margin-right: 50px;
  width: 300px;
  height: 200px;
  top: 12px;
`;

export const NewProduct = styled.Text`
  position: absolute;
  width: 329px;
  height: 86px;
  color: ${colors.tertiary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  top: 350px;
  margin-left: 80px;
  margin-right: 50px;
`;

export const ContainerSlide = styled.View`
  position: absolute;
  width: 320px;
  height: 270px;
  left: 32px;
  top: 420px;
  border-radius: 10px;
  background: ${colors.card};
  align-items: center;
  justify-content: center;
`;
