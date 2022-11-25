import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ButtonClose, PopupContainer, PopupInner } from "./styles";


export const Modal = (props) => {
    return props.trigger ? (
      <PopupContainer>
        <PopupInner>
          <ButtonClose onPress={() => props.setTrigger(false)}>
            <AntDesign name="close" color={"red"} size={24} />
          </ButtonClose>
          {props.children}
        </PopupInner>
      </PopupContainer>
    ) : (
      ""
    );
  };
