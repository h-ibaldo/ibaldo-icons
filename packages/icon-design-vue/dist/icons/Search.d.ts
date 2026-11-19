import type { DefineComponent } from 'vue';

export interface SearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Search: DefineComponent<SearchProps>;

export default Search;
export { Search };
