import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const HistoricArea = styled.View`
  flex: 1;
  margin-horizontal: ${(props) => props.theme.borderSpacing.default};
  margin-top: 40px;
`;

export const HistoricTitle = styled.Text`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: ${(props) => props.theme.borderSpacing.default};
`;

export const EntryList = styled.ScrollView`
  padding-horizontal: ${(props) => props.theme.borderSpacing.default};
  max-height: 100%;
  flex: 1;
`;

export const AddEntry = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.main};
  align-self: flex-end;
  margin: ${(props) => props.theme.borderSpacing.default};
`;

export const AddEntryIcon = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.lightGray};
`;
