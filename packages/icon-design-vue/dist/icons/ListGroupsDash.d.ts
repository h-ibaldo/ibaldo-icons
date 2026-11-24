import type { DefineComponent } from 'vue';

export interface ListGroupsDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListGroupsDash: DefineComponent<ListGroupsDashProps>;

export default ListGroupsDash;
export { ListGroupsDash };
