import type { DefineComponent } from 'vue';

export interface BookCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookCurl: DefineComponent<BookCurlProps>;

export default BookCurl;
export { BookCurl };
