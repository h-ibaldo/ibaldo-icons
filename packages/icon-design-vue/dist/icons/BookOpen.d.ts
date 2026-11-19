import type { DefineComponent } from 'vue';

export interface BookOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpen: DefineComponent<BookOpenProps>;

export default BookOpen;
export { BookOpen };
