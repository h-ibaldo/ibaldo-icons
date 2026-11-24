import type { DefineComponent } from 'vue';

export interface BookmarkCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCurl: DefineComponent<BookmarkCurlProps>;

export default BookmarkCurl;
export { BookmarkCurl };
