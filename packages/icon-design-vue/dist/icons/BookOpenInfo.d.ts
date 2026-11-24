import type { DefineComponent } from 'vue';

export interface BookOpenInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenInfo: DefineComponent<BookOpenInfoProps>;

export default BookOpenInfo;
export { BookOpenInfo };
