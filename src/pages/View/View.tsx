import React from 'react';
import {block} from 'bem-cn';
import {Avatar, Button} from "../../components";
import {AvatarSize} from "../../components/Avatar/types";
import {ViewButton,ViewLink} from "./module";
import {ViewButtonType} from "./module/Button/types";
import './styles.scss';

/**
 * The component class generator.
 */
const viewPage = block('view-page');

/**
 * The view page component.
 *
 * @constructor
 */
export default function ViewPage(): React.ReactElement {
  return (
    <div style={{ backgroundColor: '#006AFF' }} className={viewPage()}>
      <div className={viewPage('container')}>
        <div className={viewPage('box')}>
          <div className={viewPage('avatar')}>
            <Avatar url="http://fetbiko.ru/public/img/avatar.png" size={AvatarSize.Large} />
          </div>
          <div className={viewPage('content')}>
            <div className={viewPage('information')}>
              <h1 className={viewPage('username')}>
                Даниил Фетисов
              </h1>
              <p className={viewPage('description')}>
                Linqed Founder. Product Designer with years experience in digital.
              </p>
            </div>
            <div className={viewPage('buttons')}>
              <ViewButton url="#" type={ViewButtonType.vk} />
              <ViewButton url="#" type={ViewButtonType.telegram} />
              <ViewButton url="#" type={ViewButtonType.behance} />
            </div>
            <div className={viewPage('links')}>
              <ViewLink emoji="🔥" title="Мой Линкед" />
              <ViewLink emoji="🚀" title="Блог в Telegram" />
            </div>
            <span className={viewPage('copyright')}>
              Создай такую же страницу на <a href="https://www.linqed.me" target="_blank" rel="noreferrer">linqed.me</a> 🚀
            </span>
          </div>
          <div className={viewPage('button')}>
            <Button to="/">
              <span>В редактор</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}