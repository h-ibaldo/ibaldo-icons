import type { DefineComponent } from 'vue';

export interface SearchCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchCheck: DefineComponent<SearchCheckProps>;

export default SearchCheck;
export { SearchCheck };
