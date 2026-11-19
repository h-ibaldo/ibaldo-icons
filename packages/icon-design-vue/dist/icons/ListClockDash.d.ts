import type { DefineComponent } from 'vue';

export interface ListClockDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListClockDash: DefineComponent<ListClockDashProps>;

export default ListClockDash;
export { ListClockDash };
