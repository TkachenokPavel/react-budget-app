import styled from 'styled-components';
import { StyledSearch } from '../Search/styles';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const InputName = styled(StyledSearch)`
  
`;

export const InputCost = styled(StyledSearch)`
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #FFFFFF;
  background: #23C9FF;
  border: none;
  border-radius: 10px;

  &:active {
    background: #171d59;
  }
`;