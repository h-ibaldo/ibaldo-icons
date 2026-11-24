import type { DefineComponent } from 'vue';

export interface BookHeadphonesCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookHeadphonesCurved: DefineComponent<BookHeadphonesCurvedProps>;

export default BookHeadphonesCurved;
export { BookHeadphonesCurved };
