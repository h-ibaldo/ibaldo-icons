import type { DefineComponent } from 'vue';

export interface ListSearchDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSearchDash: DefineComponent<ListSearchDashProps>;

export default ListSearchDash;
export { ListSearchDash };
