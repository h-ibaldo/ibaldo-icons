import type { DefineComponent } from 'vue';

export interface BookmarkTwoCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoCurl: DefineComponent<BookmarkTwoCurlProps>;

export default BookmarkTwoCurl;
export { BookmarkTwoCurl };
