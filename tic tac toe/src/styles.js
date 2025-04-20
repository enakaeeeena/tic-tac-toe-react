import styled from "styled-components";

export const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: #f3e5ff;
  border: 2px solid #9c27b0;
  font-size: 36px;
  font-weight: bold;
  color: #6a0dad;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e1bee7;
  }
`;

export const Status = styled.div`
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  color: #4a148c;
`;

export const BoardRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const GameBoard = styled.div`
  background: #f9f0ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(106, 13, 173, 0.2);
`;

export const GameInfo = styled.div`
  background: #f9f0ff;
  padding: 20px;
  border-radius: 10px;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(106, 13, 173, 0.2);

  ol {
    padding-left: 20px;
  }
`;

export const MoveButton = styled.button`
  margin: 5px 0;
  padding: 8px 12px;
  font-size: 16px;
  background-color: #ba68c8;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9c27b0;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f3e5ff;
`;

export const GameTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: #4a148c;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
