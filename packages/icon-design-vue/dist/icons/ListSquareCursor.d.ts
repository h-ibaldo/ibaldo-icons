import type { DefineComponent } from 'vue';

export interface ListSquareCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSquareCursor: DefineComponent<ListSquareCursorProps>;

export default ListSquareCursor;
export { ListSquareCursor };
