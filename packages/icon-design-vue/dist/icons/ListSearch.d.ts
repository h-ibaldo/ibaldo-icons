import type { DefineComponent } from 'vue';

export interface ListSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSearch: DefineComponent<ListSearchProps>;

export default ListSearch;
export { ListSearch };
