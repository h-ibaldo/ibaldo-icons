import type { DefineComponent } from 'vue';

export interface SearchCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchC: DefineComponent<SearchCProps>;

export default SearchC;
export { SearchC };
