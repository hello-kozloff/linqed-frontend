import {ISlide} from "../../types";

export interface IPageTabProviderProps {
  currentSlide: ISlide['slug'];
  slides: ISlide[];
  onChange: (slug: ISlide['slug']) => void;
}