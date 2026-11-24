import type { DefineComponent } from 'vue';

export interface SearchDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchDots: DefineComponent<SearchDotsProps>;

export default SearchDots;
export { SearchDots };
