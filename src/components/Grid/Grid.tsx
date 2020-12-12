import React from 'react';
import { block } from 'bem-cn';
import renderRows from "../Menu/utils/renderRows";
import {IGridProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const grid = block('grid');

/**
 * The grid component.
 * @constructor
 */
export default function Grid(props: IGridProps): React.ReactElement {
  return (
    <div className={grid()}>
      {renderRows('grid', props.children)}
    </div>
  );
}