import React from 'react';
import { block } from 'bem-cn';
import { PageHeader, PageTabProvider } from "./modules";
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
          <PageHeader title={props.title} footer={props.children.length > 0 ? (
            <PageTabProvider slides={props.children} />
          ) : undefined} />
        </div>
      )}
      <div className={page('content')}>
        {renderSlides(props.children)}
      </div>
    </div>
  );
}