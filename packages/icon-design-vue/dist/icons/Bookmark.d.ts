import type { DefineComponent } from 'vue';

export interface BookmarkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bookmark: DefineComponent<BookmarkProps>;

export default Bookmark;
export { Bookmark };
