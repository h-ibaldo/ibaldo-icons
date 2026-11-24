import type { DefineComponent } from 'vue';

export interface BookInfoTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookInfoTilted: DefineComponent<BookInfoTiltedProps>;

export default BookInfoTilted;
export { BookInfoTilted };
