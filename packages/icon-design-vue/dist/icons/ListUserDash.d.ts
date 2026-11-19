import type { DefineComponent } from 'vue';

export interface ListUserDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListUserDash: DefineComponent<ListUserDashProps>;

export default ListUserDash;
export { ListUserDash };
