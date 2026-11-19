import type { DefineComponent } from 'vue';

export interface ListPlusDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListPlusDash: DefineComponent<ListPlusDashProps>;

export default ListPlusDash;
export { ListPlusDash };
