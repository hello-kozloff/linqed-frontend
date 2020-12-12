import React from 'react';
import { block } from 'bem-cn';

/**
 * The component class generator.
 */
const page = block('page');

/**
 * The view page component.
 *
 * @constructor
 */
export default function ViewPage(): React.ReactElement {
  return (
    <div className={page({ layout: 'view' })}>
      <h1>View page</h1>
    </div>
  );
}