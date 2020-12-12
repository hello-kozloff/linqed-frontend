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
  function renderSlides(slides: IPageProps['children']) {
    return slides.map((slide, slideId) => (
      <div key={slideId} className={page('slide')}>
        {slide.component}
      </div>
    ));
  }

  return (
    <div className={page({ layout: props.layout })}>
      {props.title && (
        <div className={page('header')}>
          <PageHeader title={props.title} />
        </div>
      )}
      <div className={page('content')}>
        {renderSlides(props.children)}
      </div>
    </div>
  );
}