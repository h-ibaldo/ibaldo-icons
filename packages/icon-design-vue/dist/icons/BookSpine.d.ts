import type { DefineComponent } from 'vue';

export interface BookSpineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookSpine: DefineComponent<BookSpineProps>;

export default BookSpine;
export { BookSpine };
