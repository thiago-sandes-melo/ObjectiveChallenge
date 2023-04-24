import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBolderText = styled.Text`
  color: #d42026;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  margin-left: 30px;
`;

export const HeaderText = styled.Text`
  color: #d42026;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const ItemSeparator = styled.View`
  height: 1px;
  background-color: #d42026;
`;

export const FlatListHeader = styled.View`
  flex: 0.15;
  flex-direction: row;
  background-color: #d42026;
  margin-top: 12px;
`;

export const FlatListHeaderTitle = styled.TextInput`
  font-size: 16px;
  color: #fff;
  margin-left: 85px;
`;

export const FlatListFooter = styled.View`
  height: 12px;
  background-color: #d42026;
`;
