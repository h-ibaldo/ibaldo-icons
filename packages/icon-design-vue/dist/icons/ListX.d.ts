import type { DefineComponent } from 'vue';

export interface ListXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListX: DefineComponent<ListXProps>;

export default ListX;
export { ListX };
