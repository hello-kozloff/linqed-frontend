import {ReactNode, ReactNodeArray} from "react";
import {IPageHeaderProps} from "./modules/Header/types";

export interface IPageProps {
  title: IPageHeaderProps['title'];
  layout: string;
  children: ReactNode | ReactNodeArray;
}