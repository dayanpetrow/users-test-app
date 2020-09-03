import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  input,
  button,
  label {
    margin: 4px;
  }
  .user-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .edit-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    width: 32%;
    min-width: 250px;
  }
  .form-actions {
    margin: 12px 0;
  }
`;
