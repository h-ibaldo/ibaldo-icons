import type { DefineComponent } from 'vue';

export interface SearchXCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchXC: DefineComponent<SearchXCProps>;

export default SearchXC;
export { SearchXC };
