import React from 'react';
import { Page } from '../../components';

export default function ContactsPage(): React.ReactElement {
  return (
    <Page title="Кнопки" layout="profile">
      {[
        {
          slug: 'buttons',
          title: 'Способы связи',
          component: (
            <div>
              <span>Способы связи</span>
            </div>
          )
        },
        {
          slug: 'links',
          title: 'Ссылки',
          component: (
            <div>
              <span>Ссылки</span>
            </div>
          )
        },
      ]}
    </Page>
  );
}