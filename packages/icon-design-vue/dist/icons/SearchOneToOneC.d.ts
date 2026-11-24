import type { DefineComponent } from 'vue';

export interface SearchOneToOneCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchOneToOneC: DefineComponent<SearchOneToOneCProps>;

export default SearchOneToOneC;
export { SearchOneToOneC };
