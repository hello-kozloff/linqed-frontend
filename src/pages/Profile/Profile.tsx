import React from 'react';
import { Page, Container, UploadImage, Grid, Input } from '../../components';

export default function ProfilePage(): React.ReactElement {
  return (
    <Page title="Профиль" layout="profile">
      {[
        {
          slug: 'profile',
          title: 'Профиль',
          component: (
            <Container>
              <Grid>
                <UploadImage url="http://fetbiko.ru/public/img/avatar.png" />
                <Input label="Имя" defaultValue="Даниил Фетисов" />
                <Input label="Описание" defaultValue="Product Designer at Linqed.me" />
                <Input label="Адрес страницы" defaultValue="linqed.me/fetchlab" />
              </Grid>
            </Container>
          )
        },
      ]}
    </Page>
  );
}