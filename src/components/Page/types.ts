import {ReactNode, ReactNodeArray} from "react";
import {IPageHeaderProps} from "./modules/Header/types";

/**
 * The slide interface.
 */
export interface ISlide {
  slug: string;
  title: string;
  component: ReactNode | ReactNodeArray;
}

/**
 * The page props interface.
 */
export interface IPageProps {
  title?: IPageHeaderProps['title'];
  layout: string;
  children: ISlide[];
}