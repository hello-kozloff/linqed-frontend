import React, {ReactNodeArray} from 'react';
import { block } from 'bem-cn';
import { IMenuProps } from './types';
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
  function renderGroups(groups: ReactNodeArray) {
    return groups.map((group, groupId) => (
      <div key={groupId} className={menu('row')}>
        {group}
      </div>
    ));
  }

  return (
    <div className={menu()}>
      {renderGroups(props.children)}
    </div>
  );
}