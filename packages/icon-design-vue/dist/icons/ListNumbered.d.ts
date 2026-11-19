import type { DefineComponent } from 'vue';

export interface ListNumberedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListNumbered: DefineComponent<ListNumberedProps>;

export default ListNumbered;
export { ListNumbered };
