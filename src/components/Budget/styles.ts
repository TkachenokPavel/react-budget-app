import styled from 'styled-components';

export const StyledBudget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100px;
  padding: 32px 20px;

  background-color: #7CC6FE;
  border-radius: 10px;
`;

export const BudgetTotal = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Button = styled.button`
  padding: 8px 28px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border: none;
  border-radius: 10px;
`;