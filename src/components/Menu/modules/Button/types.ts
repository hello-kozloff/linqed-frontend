import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

/**
 * The menu button module props interface.
 */
export interface IMenuButtonProps {
  to: LinkProps['to'];
  icon: ReactNode;
  children: string;
  disabled?: boolean;
}