import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  min-height: 200px;
  max-height: 250px;

  overflow-y: scroll;
`;

export const EmptyExpensesList = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 200px;
`;