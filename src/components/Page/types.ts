import {ReactNode, ReactNodeArray} from "react";
import {IPageHeaderProps} from "./modules/Header/types";

/**
 * The page props interface.
 */
export interface IPageProps {
  title?: IPageHeaderProps['title'];
  layout: string;
  children: ReactNode | ReactNodeArray;
}