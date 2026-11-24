import type { DefineComponent } from 'vue';

export interface SearchCheckBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchCheckB: DefineComponent<SearchCheckBProps>;

export default SearchCheckB;
export { SearchCheckB };
