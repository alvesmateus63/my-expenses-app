import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import * as S from "./styles";

interface Props {
  handleClose: () => void;
}

const ModalContent = ({ handleClose }: Props) => {
  return (
    <S.Container>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>
      <S.Content>
        <S.Input placeholder="Digite um valor" keyboardType="number-pad" />
        <S.ButtonArea>
          <S.Button earning={true} activeOpacity={0.7}>
            <S.ButtonTitle>Add ganho</S.ButtonTitle>
          </S.Button>
          <S.Button activeOpacity={0.7}>
            <S.ButtonTitle>Add gasto</S.ButtonTitle>
          </S.Button>
        </S.ButtonArea>
      </S.Content>
    </S.Container>
  );
};

export default ModalContent;
