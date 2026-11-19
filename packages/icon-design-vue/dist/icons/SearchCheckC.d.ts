import type { DefineComponent } from 'vue';

export interface SearchCheckCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchCheckC: DefineComponent<SearchCheckCProps>;

export default SearchCheckC;
export { SearchCheckC };
