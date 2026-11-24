import type { DefineComponent } from 'vue';

export interface BookLabelTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLabelTilted: DefineComponent<BookLabelTiltedProps>;

export default BookLabelTilted;
export { BookLabelTilted };
