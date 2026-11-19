import type { DefineComponent } from 'vue';

export interface BookOpenFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenFlat: DefineComponent<BookOpenFlatProps>;

export default BookOpenFlat;
export { BookOpenFlat };
