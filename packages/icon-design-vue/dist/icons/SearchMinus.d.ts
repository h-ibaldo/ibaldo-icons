import type { DefineComponent } from 'vue';

export interface SearchMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchMinus: DefineComponent<SearchMinusProps>;

export default SearchMinus;
export { SearchMinus };
