import type { DefineComponent } from 'vue';

export interface SearchMinusCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchMinusC: DefineComponent<SearchMinusCProps>;

export default SearchMinusC;
export { SearchMinusC };
