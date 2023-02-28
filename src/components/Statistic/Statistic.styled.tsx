import styled from 'styled-components';

export const StatisticCard = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
`;

export const CardTitle = styled.p`
  padding: 20px 0;
  font-size: 26px;
  color: #616161;
  font-weight: 700;
`;

export const StatisticList = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li`
  flex-basis: calc(100% / 5);
  padding: 15px 0;
  font-weight: 600;
`;

export const ItemLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const ItemValue = styled.span`
  font-size: 22px;
`;
