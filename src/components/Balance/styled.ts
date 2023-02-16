import styled from "styled-components/native";

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding-horizontal: ${(props) => props.theme.borderSpacing.default};
  margin-top: -32px;
  margin-horizontal: ${(props) => props.theme.borderSpacing.default};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 5px;
`;

export const Balance = styled.View``;

export const BalanceTitle = styled.Text`
  color: ${(props) => props.theme.colors.darkGray};
`;

interface Props {
  earnings?: boolean;
}

export const BalanceResult = styled.Text<Props>`
  color: ${(props) =>
    props.earnings ? props.theme.colors.mint : props.theme.colors.cerese};
`;
