import type { DefineComponent } from 'vue';

export interface BookInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookInfo: DefineComponent<BookInfoProps>;

export default BookInfo;
export { BookInfo };
