import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  overflow: hidden;
  text-align: center;
`;

export const TableHead = styled.th`
  padding: 10px;
  border: solid 1px #ffffff;
`;

export const HeadRow = styled.tr`
  background-color: #00a2ff;
  color: #ebf6ff;
`;

export const BodyRow = styled.tr`
  color: #7e7e7e;

  &:nth-child(even) {
    background-color: #ececec;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border: solid 1px #dddddd;
  font-weight: 600;
`;
