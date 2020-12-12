import React from 'react';
import { block } from 'bem-cn';
import {IAvatarProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const avatar = block('avatar');

/**
 * The avatar component.
 * @constructor
 */
export default function Avatar(props: IAvatarProps): React.ReactElement {
  return (
    <div className={avatar({ size: props.size })}>
      <img src={props.url} alt={props.alt} className={avatar('image')} />
    </div>
  );
}