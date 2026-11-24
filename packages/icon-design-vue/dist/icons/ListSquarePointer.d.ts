import type { DefineComponent } from 'vue';

export interface ListSquarePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSquarePointer: DefineComponent<ListSquarePointerProps>;

export default ListSquarePointer;
export { ListSquarePointer };
