import React from 'react';
import { block } from 'bem-cn';
import { IMenuGroupProps } from './types';
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
  function renderRows(groups: React.ReactNodeArray) {
    return groups.map((group, groupId) => (
      <div key={groupId} className={menuGroup('row')}>
        {group}
      </div>
    ));
  }

  return (
    <div className={menuGroup()}>
      {props.title && (
        <h4 className={menuGroup('title')}>
          {props.title}
        </h4>
      )}
      <div className={menuGroup('grid')}>
        {renderRows(props.children)}
      </div>
    </div>
  );
}