import React from 'react';
import { block } from 'bem-cn';
import { IMenuProps } from './types';
import renderRows from './utils/renderRows';
import './styles.scss';

/**
 * The component class generator.
 */
const menu = block('menu');

/**
 * The menu component.
 *
 * @param props
 * @constructor
 */
export default function Menu(props: IMenuProps): React.ReactElement {
  return (
    <div className={menu()}>
      {renderRows('menu', props.children)}
    </div>
  );
}