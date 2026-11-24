import type { DefineComponent } from 'vue';

export interface ListUserSmallDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListUserSmallDash: DefineComponent<ListUserSmallDashProps>;

export default ListUserSmallDash;
export { ListUserSmallDash };
