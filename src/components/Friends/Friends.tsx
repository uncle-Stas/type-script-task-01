import React from 'react';
import { Avatar, FriendItem, FriendsList, Name, Status } from './Friends.style';

interface IItem {
  id: number;
  isOnline: boolean;
  avatar: string;
  name: string;
}

interface IProp {
  friends: IItem[];
}

export const Friends: React.FC<IProp> = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(item => {
        const colorStatus: string = item.isOnline ? 'green' : 'red';
        return (
          <FriendItem key={item.id}>
            <Status style={{ backgroundColor: colorStatus }}></Status>
            <Avatar src={item.avatar} alt="avatar" />
            <Name>{item.name}</Name>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};
