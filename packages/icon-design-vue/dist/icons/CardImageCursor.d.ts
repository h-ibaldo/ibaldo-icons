import type { DefineComponent } from 'vue';

export interface CardImageCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardImageCursor: DefineComponent<CardImageCursorProps>;

export default CardImageCursor;
export { CardImageCursor };
