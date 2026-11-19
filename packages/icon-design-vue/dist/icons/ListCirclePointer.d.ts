import type { DefineComponent } from 'vue';

export interface ListCirclePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCirclePointer: DefineComponent<ListCirclePointerProps>;

export default ListCirclePointer;
export { ListCirclePointer };
