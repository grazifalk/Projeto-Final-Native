import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: ${colors.textButtonColor};
  align-items: center;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: ${colors.textButtonColor};
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 330px;
  height: 163.62px;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
`;

export const Card = styled.View`
  width: 352.08px;
  height: 270.46px;
  border-radius: 10px;
  margin-top: 25px;
  background: ${colors.card};
  align-items: center;
`;
export const ContainerText = styled.View`
  top: 180px;
  text-align: center;
`;

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
  padding-left: 12px;
`;

export const TitleTwo = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${colors.tertiary};
`;
