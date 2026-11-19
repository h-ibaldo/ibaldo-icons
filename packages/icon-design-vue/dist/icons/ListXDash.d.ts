import type { DefineComponent } from 'vue';

export interface ListXDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListXDash: DefineComponent<ListXDashProps>;

export default ListXDash;
export { ListXDash };
