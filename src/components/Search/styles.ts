import styled from 'styled-components';

export const StyledSearch = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  margin-bottom: 30px;
  
  border: none;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #999999;
  }
`;