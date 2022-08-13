import styled from 'styled-components';
import close from "../../assets/icons/close.svg";

export const Item = styled.li`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  width: 100%;
  height: 50px;
  padding: 0 20px;

  border-bottom: 2px solid #CCD5FF;
`;

export const ItemName = styled.p`
  flex-grow: 1;
`;

export const CloseButton = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 20px;

  background: url(${close}) no-repeat;
  border: none;
`;