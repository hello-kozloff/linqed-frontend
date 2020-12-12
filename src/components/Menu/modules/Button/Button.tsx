import React from 'react';
import { block } from 'bem-cn';
import { IMenuButtonProps } from './types';

/**
 * The component class generator.
 */
const menuButton = block('menu-button');

/**
 * The menu button module.
 *
 * @param props
 * @constructor
 */
export default function MenuButton(props: IMenuButtonProps): React.ReactElement {
  const { children: title } = props;

  return (
    <button type="button" className={menuButton()}>
      <div className={menuButton('icon')}>
        {props.icon}
      </div>
      <span className={menuButton('title')}>
        {title}
      </span>
    </button>
  );
}