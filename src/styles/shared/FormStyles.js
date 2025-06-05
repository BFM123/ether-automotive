import styled from "styled-components";

export const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BaseInput = styled.input`
  padding: 10px;
  background: #111;
  border: 1px solid #333;
  color: white;
  border-radius: 4px;
`;

export const BaseTextArea = styled.textarea`
  padding: 10px;
  background: #111;
  border: 1px solid #333;
  color: white;
  border-radius: 4px;
  min-height: 150px;
  resize: vertical;
`;

export const BaseButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;