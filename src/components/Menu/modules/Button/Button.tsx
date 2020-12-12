import React from 'react';
import { Link } from 'react-router-dom';
import { block } from 'bem-cn';
import { IMenuButtonProps } from './types';
import './styles.scss';

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
    <Link to={props.to} className={menuButton({ disabled: props.disabled })}>
      <div className={menuButton('icon')}>
        {props.icon}
      </div>
      <span className={menuButton('title')}>
        {title}
      </span>
    </Link>
  );
}