import styled from 'styled-components/native';

interface PageCounterProps {
  active: boolean;
}

export const Container = styled.TouchableOpacity<PageCounterProps>`
  border: 1px solid #d42026;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.active ? '#D42026' : 'transparent')};
  justify-content: center;
  align-items: center;
  margin: 18px 2%;
`;

export const Number = styled.Text<PageCounterProps>`
  color: ${(props) => (props.active ? '#FFF' : '#D42026')};
  font-size: 21px;
  line-height: 24px;
`;
