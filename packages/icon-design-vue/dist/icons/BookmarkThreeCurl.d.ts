import type { DefineComponent } from 'vue';

export interface BookmarkThreeCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeCurl: DefineComponent<BookmarkThreeCurlProps>;

export default BookmarkThreeCurl;
export { BookmarkThreeCurl };
