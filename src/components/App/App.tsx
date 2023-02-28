import { Section, Profile, Statistic, Friends } from 'components';
import React from 'react';

import user from 'db/user.json';
import data from 'db/data.json';
import friends from 'db/friends.json';

export const App: React.FC = () => {
  return (
    <main>
      <Section title="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistic">
        <Statistic data={data} />
      </Section>
      <Section title="Friends">
        <Friends friends={friends} />
      </Section>
    </main>
  );
};
