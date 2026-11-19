import type { DefineComponent } from 'vue';

export interface ListMinusDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListMinusDash: DefineComponent<ListMinusDashProps>;

export default ListMinusDash;
export { ListMinusDash };
