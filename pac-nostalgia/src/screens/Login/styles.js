import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #689999;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 232px;
  height: 170px;
  margin-bottom: 50px;
`;

export const InputLogin = styled.TextInput`
  width: 329px;
  height: 68px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InputPassword = styled.TextInput`
  width: 329px;
  height: 68px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const TextButton = styled.Text`
  color: #081d69;
  font-weight: 700;
  font-size: 18px;
  position: absolute;
`;

export const StButton = styled.TouchableOpacity`
  width: 329px;
  height: 47px;
  background: #ebed17;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Recover = styled.Text`
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 40px;
`;
