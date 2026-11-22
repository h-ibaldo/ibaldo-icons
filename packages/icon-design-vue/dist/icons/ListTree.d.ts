import type { DefineComponent } from 'vue';

export interface ListTreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListTree: DefineComponent<ListTreeProps>;

export default ListTree;
export { ListTree };
