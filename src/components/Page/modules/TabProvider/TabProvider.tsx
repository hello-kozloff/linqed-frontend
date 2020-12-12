import React from 'react';
import { block } from 'bem-cn';
import {IPageTabProviderProps} from "./types";

const pageTabProvider = block('page-tab-provider');

export default function PageTabProvider(props: IPageTabProviderProps): React.ReactElement {
  function renderTabs(slides: IPageTabProviderProps['slides']): React.ReactNodeArray {
    return slides.map((slide) => (
      <div className={pageTabProvider('tab')}>
        <span className={pageTabProvider('title')}>
          {slide.title}
        </span>
      </div>
    ))
  }

  return (
    <div className={pageTabProvider()}>
      {renderTabs(props.slides)}
    </div>
  );
}