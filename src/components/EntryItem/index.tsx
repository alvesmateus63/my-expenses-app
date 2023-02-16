import React from "react";
import * as S from "./styled";

interface Props {
  title: string;
  value: number;
  earning: boolean;
  type: number;
}

const EntryItem = ({ title, value, earning, type }: Props) => {
  return (
    <S.Container>
      <S.LeftArea>
        <S.Title>{title}</S.Title>
        <S.Date>(22/02)</S.Date>
      </S.LeftArea>
      <S.Value earning={earning}>
        R$ {type === 1 ? `-${value.toFixed(2)}` : value.toFixed(2)}
      </S.Value>
    </S.Container>
  );
};

export default EntryItem;
