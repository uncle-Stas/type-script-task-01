import React from 'react';

import { getRandomHexColor } from 'utils/getRandomHexColor';
import {
  CardTitle,
  ItemLabel,
  ItemValue,
  StatisticCard,
  StatisticItem,
  StatisticList,
} from './Statistic.styled';

interface IItem {
  id: string;
  label: string;
  percentage: number;
}

interface IProp {
  data: IItem[];
}

export const Statistic: React.FC<IProp> = ({ data }) => {
  return (
    <StatisticCard>
      <CardTitle>Upload stats</CardTitle>

      <StatisticList>
        {data.map(item => {
          return (
            <StatisticItem key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
              <ItemLabel>{item.label}</ItemLabel>
              <ItemValue>{item.percentage}%</ItemValue>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticCard>
  );
};
