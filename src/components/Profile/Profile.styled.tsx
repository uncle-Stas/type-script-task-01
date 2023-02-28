import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 330px;
  margin: 0 auto;
  border-radius: 7px;
  /* overflow: hidden; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: #f7f7f7;
`;

export const ProfileDescription = styled.div`
  padding: 50px 0;
  text-align: center;
  font-size: 18px;
  color: #616161;
  font-weight: 500;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.h3`
  margin-bottom: 15px;
  color: #000000;
  font-size: 28px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 15px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #e9e9e9;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  padding: 20px;
  border: solid 1px #c5c5c5;
  text-align: center;
`;

export const StatsLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #616161;
  font-weight: 500;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
`;
