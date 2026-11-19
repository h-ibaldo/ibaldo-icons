import type { DefineComponent } from 'vue';

export interface CardImageCursorLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardImageCursorLarge: DefineComponent<CardImageCursorLargeProps>;

export default CardImageCursorLarge;
export { CardImageCursorLarge };
