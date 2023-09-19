import styled from 'styled-components';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 350px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
`;

export const Button = styled.button`
  margin: 0 auto;
  display: block;
  font-size: 18px;
  height: 50px;
  background-color: #ee82ee;
  border: 1px solid white;
`;
