import type { DefineComponent } from 'vue';

export interface SearchMinusBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchMinusB: DefineComponent<SearchMinusBProps>;

export default SearchMinusB;
export { SearchMinusB };
