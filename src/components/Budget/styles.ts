import styled from 'styled-components';

export const StyledBudget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100px;
  padding: 32px 20px;
  margin-bottom: 20px;

  background-color: #7CC6FE;
  border-radius: 10px;
`;

export const Total = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Input = styled.input`
  width: 70%;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border: none;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none
  }

  &:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
`;

export const BudgetButton = styled.button`
  min-width: 90px;
  padding: 8px 28px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border: none;
  border-radius: 10px;
`;