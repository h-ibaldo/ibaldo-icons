import type { DefineComponent } from 'vue';

export interface SearchDotsCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchDotsC: DefineComponent<SearchDotsCProps>;

export default SearchDotsC;
export { SearchDotsC };
