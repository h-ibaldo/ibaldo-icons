import type { DefineComponent } from 'vue';

export interface BookBookmarkRibbonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkRibbon: DefineComponent<BookBookmarkRibbonProps>;

export default BookBookmarkRibbon;
export { BookBookmarkRibbon };
