import React from 'react';
import { block } from 'bem-cn';
import {IPageTabProviderProps} from "./types";
import './styles.scss';

const pageTabProvider = block('page-tab-provider');

export default function PageTabProvider(props: IPageTabProviderProps): React.ReactElement {
  function renderTabs(slides: IPageTabProviderProps['slides']): React.ReactNodeArray {
    return slides.map((slide) => (
      <button type="button" className={pageTabProvider('tab', { current: props.currentSlide === slide.slug })}>
        <span className={pageTabProvider('title')}>
          {slide.title}
        </span>
      </button>
    ))
  }

  return (
    <div className={pageTabProvider()}>
      {renderTabs(props.slides)}
    </div>
  );
}