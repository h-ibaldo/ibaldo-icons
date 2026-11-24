import type { DefineComponent } from 'vue';

export interface SearchOneToOneBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchOneToOneB: DefineComponent<SearchOneToOneBProps>;

export default SearchOneToOneB;
export { SearchOneToOneB };
