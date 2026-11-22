import type { DefineComponent } from 'vue';

export interface BookHeadphonesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookHeadphones: DefineComponent<BookHeadphonesProps>;

export default BookHeadphones;
export { BookHeadphones };
