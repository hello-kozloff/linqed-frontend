import React from 'react';
import { block } from 'bem-cn';
import {IInputProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const input = block('input');

/**
 * The input component.
 *
 * @constructor
 */
export default function Input(props: IInputProps): React.ReactElement {
  const [value, setValue] = React.useState<IInputProps['defaultValue']>(props.defaultValue);
  const [focused, setFocused] = React.useState<boolean>(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function onFocus(): void {
    setFocused(true);
  }

  function onBlur(): void {
    setFocused(false);
  }

  return (
    <label className={input()}>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={value}
        className={input( 'field')}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <span className={input('label', { collapsed: (focused) || (value && value.length > 0) })}>
        {props.label}
      </span>
    </label>
  );
}