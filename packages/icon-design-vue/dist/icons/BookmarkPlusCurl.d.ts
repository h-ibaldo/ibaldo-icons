import type { DefineComponent } from 'vue';

export interface BookmarkPlusCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCurl: DefineComponent<BookmarkPlusCurlProps>;

export default BookmarkPlusCurl;
export { BookmarkPlusCurl };
