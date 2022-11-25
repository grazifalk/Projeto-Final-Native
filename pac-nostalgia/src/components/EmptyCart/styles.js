import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ImageSad = styled.Image`
  width: 232px;
  height: 170px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: ${colors.tertiary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TextButton = styled.Text`
  color: ${colors.textButtonColor};
  font-weight: 700;
  font-size: 18px;
  position: absolute;
`;

export const StButton = styled.TouchableOpacity`
  width: 329px;
  height: 47px;
  background: ${colors.buttonColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
