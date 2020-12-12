import React from 'react';
import { block } from 'bem-cn';
import { IMenuGroupProps } from './types';
import renderRows from '../../utils/renderRows';
import './styles.scss';

/**
 * The component class generator.
 */
const menuGroup = block('menu-group');

/**
 * The menu group module.
 *
 * @param props
 * @constructor
 */
export default function MenuGroup(props: IMenuGroupProps): React.ReactElement {
  return (
    <div className={menuGroup()}>
      {props.title && (
        <h4 className={menuGroup('title')}>
          {props.title}
        </h4>
      )}
      <nav className={menuGroup('grid')}>
        {renderRows('menu-group', props.children)}
      </nav>
    </div>
  );
}