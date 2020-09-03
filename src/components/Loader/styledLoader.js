import styled, { keyframes } from "styled-components";

const rotate = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  margin-top: 10%;
  width: 100%;
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;
    margin: 0px auto;
  }
`;
