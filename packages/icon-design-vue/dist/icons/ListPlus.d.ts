import type { DefineComponent } from 'vue';

export interface ListPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListPlus: DefineComponent<ListPlusProps>;

export default ListPlus;
export { ListPlus };
