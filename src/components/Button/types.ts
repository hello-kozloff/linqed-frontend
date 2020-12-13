import {LinkProps } from 'react-router-dom';
import {ReactElement} from "react";

export interface IButtonProps {
  to: LinkProps['to'];
  children: ReactElement;
}