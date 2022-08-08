import styled from 'styled-components';

export const StyledRemaining = styled.div<{ $isOverspending: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100px;
  padding: 32px 20px;
  margin-bottom: 20px;

  border-radius: 10px;
  background-color: ${({ $isOverspending }) => ($isOverspending ? '#FF0000' : '#CCD5FF')};
`;

export const RemainingValue = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const OverspendingValue = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.5px;

  color: #FFFFFF
`;