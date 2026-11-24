import type { DefineComponent } from 'vue';

export interface SearchExpandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchExpand: DefineComponent<SearchExpandProps>;

export default SearchExpand;
export { SearchExpand };
