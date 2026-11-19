import type { DefineComponent } from 'vue';

export interface CardImageCursorSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardImageCursorSmall: DefineComponent<CardImageCursorSmallProps>;

export default CardImageCursorSmall;
export { CardImageCursorSmall };
