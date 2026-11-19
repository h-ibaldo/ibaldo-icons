import type { DefineComponent } from 'vue';

export interface SearchPlusBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchPlusB: DefineComponent<SearchPlusBProps>;

export default SearchPlusB;
export { SearchPlusB };
