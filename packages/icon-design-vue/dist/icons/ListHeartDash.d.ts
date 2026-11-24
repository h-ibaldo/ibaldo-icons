import type { DefineComponent } from 'vue';

export interface ListHeartDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListHeartDash: DefineComponent<ListHeartDashProps>;

export default ListHeartDash;
export { ListHeartDash };
