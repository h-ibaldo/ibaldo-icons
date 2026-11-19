import type { DefineComponent } from 'vue';

export interface SearchCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchCode: DefineComponent<SearchCodeProps>;

export default SearchCode;
export { SearchCode };
