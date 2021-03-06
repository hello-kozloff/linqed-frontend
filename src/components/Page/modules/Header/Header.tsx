import React from 'react';
import { useHistory } from 'react-router-dom';
import { block } from 'bem-cn';
import {IconChevronLeft} from '../../../../components/Icons';
import {IPageHeaderProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const pageHeader = block('page-header');

export default function PageHeader(props: IPageHeaderProps): React.ReactElement {
  const { goBack } = useHistory();

  return (
    <header className={pageHeader()}>
      <div className={pageHeader('content')}>
        <button type="button" onClick={() => goBack()} className={pageHeader('page-back')}>
          {IconChevronLeft}
        </button>
        <strong className={pageHeader('title')}>
          {props.title}
        </strong>
      </div>
      {props.footer && (
        <div className={pageHeader('footer')}>
          {props.footer}
        </div>
      )}
    </header>
  );
}