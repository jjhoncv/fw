import styled from 'styled-components';

export const FormStyled = styled.form`

`;

export const FormItemStyled = styled.div`
  margin: 10px 0;
  label {
    padding: 10px;
    padding-left: 0;
    width: 60px;
    display: inline-block;
  }
  input {
    padding: 5px 10px;
  }
  input[type=text], input[type=password]{
    border: 1px solid #ccc;
    width: 200px;
  }
`;