import React from 'react';
import { block } from 'bem-cn';
import {IContainerProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const container = block('container');

/**
 * The container component.
 * @constructor
 */
export default function Container(props: IContainerProps): React.ReactElement {
  return (
    <div className={container()}>
      {props.children}
    </div>
  );
}