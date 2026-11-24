import type { DefineComponent } from 'vue';

export interface SearchPlusCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchPlusC: DefineComponent<SearchPlusCProps>;

export default SearchPlusC;
export { SearchPlusC };
