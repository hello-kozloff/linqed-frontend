import React from 'react';
import { block } from 'bem-cn';
import {IViewLinkProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const viewLink = block('view-link');

/**
 * The view link module.
 *
 * @constructor
 */
export default function ViewLink(props: IViewLinkProps): React.ReactElement {
  return (
    <a href="/" className={viewLink()}>
      <span className={viewLink('emoji')}>
        {props.emoji}
      </span>
      <span className={viewLink('title')}>
        {props.title}
      </span>
    </a>
  );
}