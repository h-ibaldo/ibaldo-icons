import type { DefineComponent } from 'vue';

export interface ListRightDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListRightDash: DefineComponent<ListRightDashProps>;

export default ListRightDash;
export { ListRightDash };
