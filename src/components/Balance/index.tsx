import React from "react";
import * as S from "./styled";

interface Props {
  balance: number;
  expenses: number;
}

const Balance = ({ balance, expenses }: Props) => {
  return (
    <S.BalanceContainer>
      <S.Balance>
        <S.BalanceTitle>Saldo:</S.BalanceTitle>
        <S.BalanceResult earnings={balance >= 0 ? true : false}>
          R$ {balance.toFixed(2)}
        </S.BalanceResult>
      </S.Balance>
      <S.Balance>
        <S.BalanceTitle>Gastos:</S.BalanceTitle>
        <S.BalanceResult>R$ {expenses.toFixed(2)}</S.BalanceResult>
      </S.Balance>
    </S.BalanceContainer>
  );
};

export default Balance;
