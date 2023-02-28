import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 300px;
  margin: 0 auto;
`;

export const FriendItem = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: aqua;
  margin-right: 20px;
`;

export const Avatar = styled.img`
  width: 60px;
  margin-right: 20px;
  padding: 5px;
  border: solid 1px #dbcccc;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
