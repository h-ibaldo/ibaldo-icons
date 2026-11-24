import type { DefineComponent } from 'vue';

export interface ListStatusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListStatus: DefineComponent<ListStatusProps>;

export default ListStatus;
export { ListStatus };
