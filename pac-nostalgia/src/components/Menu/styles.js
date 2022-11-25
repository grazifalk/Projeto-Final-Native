import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  height: 77px;
  background-color: ${colors.secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
  bottom: 0;
`;
