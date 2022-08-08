import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 900px;
    margin: 0 auto;
    padding: 30px 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export { Wrapper }