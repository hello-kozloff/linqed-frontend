import React, { ReactNodeArray } from 'react';
import { block } from 'bem-cn';
import { IMenuGroupProps } from './types';

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
  function renderGroups(groups: ReactNodeArray) {
    return groups.map((group, groupId) => (
      <div key={groupId} className={menuGroup('item')}>
        {group}
      </div>
    ));
  }

  return (
    <div className={menuGroup()}>
      {renderGroups(props.children)}
    </div>
  );
}