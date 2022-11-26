import styled from "styled-components/native";
import colors from "../../themes/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const ImageContainer = styled.View`
  /* width: 97.68px;
height: 88.99px;
border-radius: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 55px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-right: 40px;
`;

export const ImageProduct = styled.Image`
  width: 97.68px;
  height: 88.99px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: "Inter";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding-top: 3px
  color: ${colors.textButtonColor};
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
  margin-top: 20px;
  margin-bottom: 20px;
`;
