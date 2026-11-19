import type { DefineComponent } from 'vue';

export interface ListXSquareCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListXSquareCenter: DefineComponent<ListXSquareCenterProps>;

export default ListXSquareCenter;
export { ListXSquareCenter };
