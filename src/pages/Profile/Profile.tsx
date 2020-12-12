import React from 'react';
import { Page, Container } from '../../components';

export default function ProfilePage(): React.ReactElement {
  return (
    <Page title="Профиль" layout="profile">
      {[
        {
          slug: 'profile',
          title: 'Профиль',
          component: (
            <Container>
              <span>Hello world</span>
            </Container>
          )
        },
      ]}
    </Page>
  );
}