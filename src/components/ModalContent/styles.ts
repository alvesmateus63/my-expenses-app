import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding-vertical: 40px;
  padding-horizontal: ${(props) => props.theme.borderSpacing.default};
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-radius: 5px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  earning?: boolean;
}

export const Button = styled.TouchableOpacity<Props>`
  margin-top: ${(props) => props.theme.borderSpacing.default};
  width: 48%;
  padding: 10px;
  background-color: ${(props) =>
    props.earning ? props.theme.colors.mint : props.theme.colors.cerese};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  color: ${(props) => props.theme.colors.lightGray};
`;
