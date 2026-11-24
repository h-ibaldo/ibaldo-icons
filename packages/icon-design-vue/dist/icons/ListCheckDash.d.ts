import type { DefineComponent } from 'vue';

export interface ListCheckDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCheckDash: DefineComponent<ListCheckDashProps>;

export default ListCheckDash;
export { ListCheckDash };
