import React from 'react';
import {Page, Container, UploadImage} from '../../components';

export default function ProfilePage(): React.ReactElement {
  return (
    <Page title="Профиль" layout="profile">
      {[
        {
          slug: 'profile',
          title: 'Профиль',
          component: (
            <Container>
              <UploadImage url="http://fetbiko.ru/public/img/avatar.png" />
            </Container>
          )
        },
      ]}
    </Page>
  );
}