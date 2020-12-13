import React from 'react';
import { block } from 'bem-cn';
import { Link } from 'react-router-dom';
import {IButtonProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const button = block('button');

/**
 * The button component.
 *
 * @param props
 * @constructor
 */
export default function Button(props: IButtonProps): React.ReactElement {
  return (
    <Link to={props.to} className={button()}>
      {props.children}
    </Link>
  );
}