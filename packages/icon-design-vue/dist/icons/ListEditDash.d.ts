import type { DefineComponent } from 'vue';

export interface ListEditDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListEditDash: DefineComponent<ListEditDashProps>;

export default ListEditDash;
export { ListEditDash };
