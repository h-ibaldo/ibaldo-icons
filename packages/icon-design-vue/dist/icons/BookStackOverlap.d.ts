import type { DefineComponent } from 'vue';

export interface BookStackOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookStackOverlap: DefineComponent<BookStackOverlapProps>;

export default BookStackOverlap;
export { BookStackOverlap };
