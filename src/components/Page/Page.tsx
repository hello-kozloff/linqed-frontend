import React from 'react';
import { block } from 'bem-cn';
import { PageHeader } from "./modules";
import { IPageProps } from './types';
import './styles.scss';

/**
 * The component class generator.
 */
const page = block('page');

/**
 * The page component.
 *
 * @param props
 * @constructor
 */
export default function Page(props: IPageProps): React.ReactElement {
  return (
    <div className={page({ layout: props.layout })}>
      {props.title && (
        <div className={page('header')}>
          <PageHeader title={props.title} />
        </div>
      )}
      <div className={page('content')}>
        {props.children}
      </div>
    </div>
  );
}