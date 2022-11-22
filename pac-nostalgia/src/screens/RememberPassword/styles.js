import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #689999;
  align-items: center;
  justify-content: center;
`;

export const InputLogin = styled.TextInput`
  width: 329px;
  height: 68px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${colors.card};
  margin-top: 15px;
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

export const Title = styled.Text`
  position: absolute;
  width: 390px;
  height: 86px;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 10rem;
  margin-top: 5px;
  bottom: 400px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: flex-end;
  text-align: center;

  color: #ffffff;
`;
