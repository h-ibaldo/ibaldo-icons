import type { DefineComponent } from 'vue';

export interface BookStackTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookStackTilted: DefineComponent<BookStackTiltedProps>;

export default BookStackTilted;
export { BookStackTilted };
