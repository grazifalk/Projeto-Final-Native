import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const PopupContainer = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupInner = styled.View`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background: ${colors.card};
  border-radius: 10px;
  border: solid 3px ${colors.textButtonColor};

`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: color 0.3s;
`;