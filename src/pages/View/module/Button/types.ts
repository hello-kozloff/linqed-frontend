export enum ViewButtonType {
  vk = 'vk',
  telegram = 'telegram',
  behance = 'behance'
}

export interface IViewButtonProps {
  url: HTMLLinkElement['href'];
  type: ViewButtonType;
}