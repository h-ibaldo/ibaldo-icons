import type { DefineComponent } from 'vue';

export interface BookOpenPageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenPage: DefineComponent<BookOpenPageProps>;

export default BookOpenPage;
export { BookOpenPage };
