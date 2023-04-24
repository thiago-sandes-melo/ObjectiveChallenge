import styled from 'styled-components/native';

export const Item = styled.View`
  flex-direction: row;
  min-height: 78px;
  margin: 5px 0px;
  padding: 0px 10px;
`;

export const AvatarImage = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 50px;
  margin: 18px 10px;
`;

export const Information = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NameText = styled.Text`
  font-size: 21px;
  line-height: 23px;
  color: #4E4E4E;
`;

export const ItemSeparator = styled.View`
  height: 1px;
  background-color: #D42026;
`;
