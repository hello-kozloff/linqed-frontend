import React from 'react';
import { Page } from '../../components';

export default function ProfilePage(): React.ReactElement {
  return (
    <Page title="profile" layout="profile">
      {[
        {
          slug: 'profile',
          title: 'Профиль',
          component: (
            <div>
              <span>Hello world</span>
            </div>
          )
        },
      ]}
    </Page>
  );
}