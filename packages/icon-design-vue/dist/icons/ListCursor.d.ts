import type { DefineComponent } from 'vue';

export interface ListCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCursor: DefineComponent<ListCursorProps>;

export default ListCursor;
export { ListCursor };
