import type { DefineComponent } from 'vue';

export interface ListXSquareCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListXSquareCorner: DefineComponent<ListXSquareCornerProps>;

export default ListXSquareCorner;
export { ListXSquareCorner };
