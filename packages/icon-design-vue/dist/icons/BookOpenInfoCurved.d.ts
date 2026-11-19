import type { DefineComponent } from 'vue';

export interface BookOpenInfoCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenInfoCurved: DefineComponent<BookOpenInfoCurvedProps>;

export default BookOpenInfoCurved;
export { BookOpenInfoCurved };
