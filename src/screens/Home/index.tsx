import React, { useEffect, useState } from "react";

// Components
import Balance from "../../components/Balance";
import EntryItem from "../../components/EntryItem";
import Header from "../../components/Header";
import ModalContent from "../../components/ModalContent";

//Utils
import { Moviment } from "../../../list";

import * as S from "./styles";
import { Modal } from "react-native";

export const Home: React.FC = () => {
  const [modalVisile, setModalVisible] = useState<boolean>(false);
  const [expenses, setExpenses] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    let sumExpenses = 0.0;
    let sumEarnings = 0.0;
    Moviment.forEach((e) => {
      if (e.type === 1) {
        sumExpenses += e.value;
      }
      if (e.type === 0) {
        sumEarnings += e.value;
      }
    });
    setExpenses(sumExpenses);
    setBalance(sumEarnings - sumExpenses);
  }, [Moviment]);

  return (
    <S.Container>
      <Header />
      <Balance balance={balance} expenses={expenses} />
      <S.HistoricArea>
        <S.HistoricTitle>Histórico:</S.HistoricTitle>
        <S.EntryList>
          {Moviment.map((item, index) => (
            <EntryItem
              key={index}
              title={item.title}
              value={item.value}
              earning={item.type === 0 ? true : false}
              type={item.type}
            />
          ))}
        </S.EntryList>
      </S.HistoricArea>
      <S.AddEntry activeOpacity={0.8}>
        <S.AddEntryIcon onPress={() => setModalVisible(true)}>+</S.AddEntryIcon>
        <Modal
          transparent={true}
          visible={modalVisile}
          onRequestClose={() => setModalVisible(false)}
        >
          <ModalContent handleClose={() => setModalVisible(false)} />
        </Modal>
      </S.AddEntry>
    </S.Container>
  );
};
