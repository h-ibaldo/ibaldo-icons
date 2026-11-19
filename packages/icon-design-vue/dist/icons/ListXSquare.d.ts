import type { DefineComponent } from 'vue';

export interface ListXSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListXSquare: DefineComponent<ListXSquareProps>;

export default ListXSquare;
export { ListXSquare };
