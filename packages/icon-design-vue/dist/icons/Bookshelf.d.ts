import type { DefineComponent } from 'vue';

export interface BookshelfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bookshelf: DefineComponent<BookshelfProps>;

export default Bookshelf;
export { Bookshelf };
