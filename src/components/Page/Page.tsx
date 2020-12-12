import React from 'react';
import { block } from 'bem-cn';
import { PageHeader } from "./modules";
import { IPageProps } from './types';
import './styles.scss';

const page = block('page');

export default function Page(props: IPageProps): React.ReactElement {
  return (
    <div className={page({ layout: props.layout })}>
      <div className={page('header')}>
        <PageHeader title={props.title} />
      </div>
      <div className={page('content')}>
        {props.children}
      </div>
    </div>
  );
}