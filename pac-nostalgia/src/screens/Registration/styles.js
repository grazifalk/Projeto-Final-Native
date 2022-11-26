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
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${colors.tertiary};
`;

export const InputName = styled.TextInput`
  width: 309px;
  height: 48px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputCPF = styled.TextInput`
  width: 309px;
  height: 48px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputDate = styled.TextInput`
  width: 309px;
  height: 48px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputPassword = styled.TextInput`
  width: 309px;
  height: 48px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputConfirmPassword = styled.TextInput`
  width: 309px;
  height: 48px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const StButton = styled.TouchableOpacity`
  width: 309px;
  height: 48px;
  background: ${colors.buttonColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: ${colors.textButtonColor};
  font-weight: 700;
  font-size: 18px;
  position: absolute;
`;
