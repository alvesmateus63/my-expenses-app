import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.main};
  padding-horizontal: 20px;
  padding-top: 50px;
`;

export const headerLabel = styled.Text`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-bottom: 50px;
`;
