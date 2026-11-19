import type { DefineComponent } from 'vue';

export interface ListDividerDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListDividerDash: DefineComponent<ListDividerDashProps>;

export default ListDividerDash;
export { ListDividerDash };
