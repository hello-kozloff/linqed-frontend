import React from 'react';
import {Page, Menu, Header} from '../../components';
import { MenuGroup, MenuButton } from "../../components/Menu/modules";
import {
  IconUser,
  IconLink,
  IconServices,
  IconChart,
  IconEvents,
  IconPhoto,
  IconComment
} from '../../components/Icons';

export default function HomePage(): React.ReactElement {
  return (
    <Page layout="profile">
      {[
        {
          slug: 'profile',
          title: 'Профиль',
          component: (
            <>
              <Header />
              <Menu>
                <MenuGroup title="Основное">
                  <MenuButton to="/profile" icon={IconUser}>
                    Информация
                  </MenuButton>
                  <MenuButton to="/contacts" icon={IconLink}>
                    Кнопки
                  </MenuButton>
                  <MenuButton icon={IconServices}>
                    Оформление
                  </MenuButton>
                </MenuGroup>
                <MenuGroup title="Инструменты">
                  <MenuButton icon={IconChart}>
                    Аналитика
                  </MenuButton>
                  <MenuButton icon={IconEvents}>
                    Виджет на сайт
                  </MenuButton>
                  <MenuButton icon={IconPhoto}>
                    QR-конструктор
                  </MenuButton>
                  <MenuButton icon={IconComment}>
                    Мессенджер
                  </MenuButton>
                </MenuGroup>
              </Menu>
            </>
          )
        },
      ]}
    </Page>
  );
}