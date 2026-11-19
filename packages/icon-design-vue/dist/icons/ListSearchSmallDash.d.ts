import type { DefineComponent } from 'vue';

export interface ListSearchSmallDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSearchSmallDash: DefineComponent<ListSearchSmallDashProps>;

export default ListSearchSmallDash;
export { ListSearchSmallDash };
