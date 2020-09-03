import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 904px;
  margin: 0px auto;
  background-color: #f1f8f9;
  > div:nth-child(odd) {
    background-color: #f2f2f2;
  }
  > div:nth-child(even) {
    background-color: #f7f7f7;
  }
`;
