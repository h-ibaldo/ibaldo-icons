import type { DefineComponent } from 'vue';

export interface BookmarkOneCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOneCurl: DefineComponent<BookmarkOneCurlProps>;

export default BookmarkOneCurl;
export { BookmarkOneCurl };
