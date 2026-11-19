import type { DefineComponent } from 'vue';

export interface ListDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListDash: DefineComponent<ListDashProps>;

export default ListDash;
export { ListDash };
