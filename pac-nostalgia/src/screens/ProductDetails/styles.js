import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const CardProduct = styled.View`
  width: 352.08px;
  height: 335px;
  border-radius: 10px;
  align-items: center;
  background: ${colors.card};
`;

export const ProductImage = styled.Image`
  width: 330px;
  height: 163.62px;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
`;

export const ProductText = styled.Text`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: ${colors.textButtonColor};
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerText = styled.View`
  top: 180px;
  text-align: center;
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

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  align-items: flex-end;
  text-align: center;
  color: ${colors.tertiary};
`;

export const Message = styled.Text`
  color: ${colors.textButtonColor};
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;