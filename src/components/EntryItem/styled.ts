import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.lightBlue};
  padding: ${(props) => props.theme.borderSpacing.default};
  margin-top: ${(props) => props.theme.borderSpacing.default};
  border-radius: 5px;
`;

export const LeftArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.darkGray};
  margin-right: 5px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.mainLight};
`;

interface Props {
  earning: boolean;
}

export const Value = styled.Text<Props>`
  color: ${(props) =>
    props.earning ? props.theme.colors.mint : props.theme.colors.cerese};
`;
