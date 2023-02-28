import React from 'react';
import {
  Avatar,
  Name,
  ProfileCard,
  ProfileDescription,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  Tag,
} from './Profile.styled';

interface IProp {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const Profile: React.FC<IProp> = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <p>{location}</p>
      </ProfileDescription>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};
