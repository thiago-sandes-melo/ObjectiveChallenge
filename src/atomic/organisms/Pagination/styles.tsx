import styled from 'styled-components/native';

interface ArrowProps {
  rotation: string;
  active: boolean;
}

export const Content = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.TouchableOpacity<ArrowProps>`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 20px;
  border-right-width: 20px;
  border-bottom-width: 40px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${props => props.active ? '#D42026' : 'rgba(210, 10, 10, 0.35)'};
  transform: rotate(${props => props.rotation}deg);
  margin: 18px 30px;
`;
