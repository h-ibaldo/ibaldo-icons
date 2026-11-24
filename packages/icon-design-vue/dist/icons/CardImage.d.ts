import type { DefineComponent } from 'vue';

export interface CardImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardImage: DefineComponent<CardImageProps>;

export default CardImage;
export { CardImage };
