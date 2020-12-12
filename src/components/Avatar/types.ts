export enum AvatarSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface IAvatarProps {
  url: string;
  alt: string;
  size: AvatarSize;
}