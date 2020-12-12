import React from 'react';
import { Page, Container } from '../../components';

export default function ContactsPage(): React.ReactElement {
  return (
    <Page title="Кнопки" layout="profile">
      {[
        {
          slug: 'buttons',
          title: 'Способы связи',
          component: (
            <Container>
              <span>Способы связи</span>
            </Container>
          )
        },
        {
          slug: 'links',
          title: 'Ссылки',
          component: (
            <Container>
              <span>Ссылки</span>
            </Container>
          )
        },
      ]}
    </Page>
  );
}