import { Section, Profile } from 'components';
import React from 'react';

import user from 'db/user.json';

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
    </main>
  );
};
