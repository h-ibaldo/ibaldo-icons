import type { DefineComponent } from 'vue';

export interface ListCheckSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCheckSquare: DefineComponent<ListCheckSquareProps>;

export default ListCheckSquare;
export { ListCheckSquare };
